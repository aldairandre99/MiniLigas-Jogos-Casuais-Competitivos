// src/store/auth-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  username: string;
  password: string;
  victories: number;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  incrementVictory: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      login: (username, password) => {
        const user = get().users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          set({ currentUser: user });
          return true;
        }
        return false;
      },

      register: (username, password) => {
        const exists = get().users.some((u) => u.username === username);
        if (exists) return false;

        const newUser = { username, password, victories: 0 };
        set((state) => ({
          users: [...state.users, newUser],
          currentUser: newUser,
        }));
        return true;
      },

      logout: () => set({ currentUser: null }),

      incrementVictory: () => {
        const user = get().currentUser;
        if (!user) return;

        const updatedUsers = get().users.map((u) =>
          u.username === user.username
            ? { ...u, victories: u.victories + 1 }
            : u
        );

        const updatedUser = updatedUsers.find((u) => u.username === user.username)!;

        set({
          users: updatedUsers,
          currentUser: updatedUser,
        });
      },
    }),
    {
      name: "auth-storage", // chave no localStorage
    }
  )
);

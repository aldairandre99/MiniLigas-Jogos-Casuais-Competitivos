import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  username: string;
  password: string;
  victories: number;
  defeats: number;
  type: "user" | "admin" | "bot";
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  incrementVictory: () => void;
  incrementDefeat: () => void;
  setUsers: (users: User[]) => void;
}

export const dummyUsers: User[] = [
  { username: "bot_1", password: "123", victories: 25, defeats: 6, type: "bot" },
  { username: "bot_2", password: "123", victories: 40, defeats: 10, type: "bot" },
  { username: "bot_3", password: "123", victories: 30, defeats: 12, type: "bot" },
  { username: "bot_4", password: "123", victories: 35, defeats: 10, type: "bot" },
  { username: "bot_5", password: "123", victories: 27, defeats: 5, type: "bot" },
  { username: "admin", password: "123", victories: 0, defeats: 0, type: "admin" },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      setUsers: (users) => set({ users }),

      login: (username, password) => {
        const user = get().users.find((u) => u.username === username && u.password === password);
        if (user) {
          set({ currentUser: user });
          return true;
        }
        return false;
      },

      register: (username, password) => {
        const exists = get().users.some((u) => u.username === username);
        if (exists) return false;

        const newUser: User = {
          username,
          password,
          victories: 0,
          defeats: 0,
          type: "user",
        };

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
          u.username === user.username ? { ...u, victories: u.victories + 1 } : u
        );
        const updatedUser = updatedUsers.find((u) => u.username === user.username)!;

        set({ users: updatedUsers, currentUser: updatedUser });
      },

      incrementDefeat: () => {
        const user = get().currentUser;
        if (!user) return;

        const updatedUsers = get().users.map((u) =>
          u.username === user.username ? { ...u, defeats: u.defeats + 1 } : u
        );
        const updatedUser = updatedUsers.find((u) => u.username === user.username)!;

        set({ users: updatedUsers, currentUser: updatedUser });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

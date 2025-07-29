import { create } from "zustand";

import { AppState } from "./types";

export const useAppStore = create<AppState>((set) => ({
  splashDone: false,
  setSplashDone: (done) => set({ splashDone: done }),
}));

import { create } from "zustand";

import { SoundState } from "./types";

const getInitialSound = () => {
  const saved = localStorage.getItem("isPlaying");

  return saved ? JSON.parse(saved) : false;
};

export const useSoundStore = create<SoundState>((set) => ({
  isPlaying: getInitialSound(),
  toggleSound: () =>
    set((state) => {
      localStorage.setItem("isPlaying", JSON.stringify(!state.isPlaying));

      return { isPlaying: !state.isPlaying };
    }),
  setPlaying(value) {
    localStorage.setItem("isPlaying", JSON.stringify(value));
    set({ isPlaying: value });
  },
}));

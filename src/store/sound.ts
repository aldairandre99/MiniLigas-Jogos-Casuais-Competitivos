// src/store/sound-store.ts
import { create } from "zustand";
import { SoundState } from "./types";

//cria o useSoundStore pra mim
export const useSoundStore = create<SoundState>((set)=>({
  isPlaying: false,
  toggleSound: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying(value) {
    set({ isPlaying: value });
  },
}))
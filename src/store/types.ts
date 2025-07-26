export interface AppState {
  splashDone: boolean;
  setSplashDone: (done: boolean) => void;
}

export interface SoundState {
  isPlaying: boolean;
  toggleSound: () => void;
  setPlaying: (value: boolean) => void;
}


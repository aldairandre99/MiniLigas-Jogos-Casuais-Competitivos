import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { useSoundStore } from "@/store/sound";
import { SoundSwitch } from "../sound-switch";

export const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying, toggleSound } = useSoundStore();

  const handleStart = () => {
    // Toca áudio e inicia splash
    if (isPlaying) {
      audioRef.current = new Audio("/public/sounds/splash-audio-1.mp3");
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
    setHasStarted(true);

    // Oculta splash depois de 2.5s
    setTimeout(() => {
      audioRef.current?.pause();
      onFinish();
    }, 2500);
  };

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center dark:text-white">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">
            MiniLigas
          </h1>
          <span className="text-5xl text-blue-500 text-center mb-4">🎮</span>
        </div>
        <Button
          size="lg"
          onPress={handleStart}
          className="dark:bg-white text-indigo-700 rounded-md font-semibold shadow-md hover:bg-gray-200"
        >
          Entrar
        </Button>
        <SoundSwitch color="dark:text-white mt-4"/>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-wider text-red-500">
            MiniLigas
            <span className="block mt-1">🎮</span>
          </h1>
          <p className="text-lg mt-2">Jogos Casuais Competitivos</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

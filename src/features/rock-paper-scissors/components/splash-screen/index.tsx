import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";

import { Logo } from "./logo";

import { useSoundStore } from "@/store/sound";
import { SoundSwitch } from "@/components/sound-switch";
import { useAuthStore } from "@/store/auth-store";

export const SplashScreen = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlaying } = useSoundStore();
  const currentUser = useAuthStore((u) => u.currentUser);
  const navigate = useNavigate();
  const handleStart = () => {
    if (isPlaying) {
      audioRef.current = new Audio("/sounds/splash-audio-1.mp3");
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
    setHasStarted(true);

    if (currentUser) {
      setTimeout(() => {
        audioRef.current?.pause();
        navigate("/onboarding");
      }, 2500);
    } else {
      setTimeout(() => {
        audioRef.current?.pause();
        navigate("/signup-rps");
      }, 2500);
    }
  };

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center dark:text-white">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">MiniLigas</h1>
          <span className="text-5xl text-blue-500 text-center mb-4">🎮</span>
        </div>
        <Button
          className="dark:bg-white text-indigo-700 rounded-md font-semibold shadow-md hover:bg-gray-200"
          size="lg"
          onPress={handleStart}
        >
          Entrar
        </Button>
        <SoundSwitch color="dark:text-white mt-4" />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center justify-center fixed inset-0 z-50  bg-white"
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className="text-white text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo />
        </motion.div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <span className="font-bold text-[#D94690] text-7xl">R-</span>
          <span className="font-bold text-[#F0CA44] text-7xl">P-</span>
          <span className="font-bold text-[#5BC6E0] text-7xl">S</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

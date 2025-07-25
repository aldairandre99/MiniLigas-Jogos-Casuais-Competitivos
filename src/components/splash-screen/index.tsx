import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    // Toca áudio e inicia splash
    audioRef.current = new Audio("/public/sounds/splash-audio-1.mp3");
    audioRef.current.volume = 0.1;
    audioRef.current.play();
    setHasStarted(true);

    // Oculta splash depois de 2.5s
    setTimeout(() => {
      audioRef.current?.pause();
      onFinish();
    }, 2500);
  };

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">🎮 MiniLigas</h1>
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-white text-indigo-700 rounded-md font-semibold shadow-md hover:bg-gray-200"
        >
          Entrar
        </button>
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
          <h1 className="text-5xl font-extrabold tracking-wider">🎮 MiniLigas</h1>
          <p className="text-lg mt-2">Jogos Casuais Competitivos</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

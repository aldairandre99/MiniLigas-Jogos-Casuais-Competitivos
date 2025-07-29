import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@heroui/image";
import { useEffect } from "react";

import { useAuthStore } from "@/store/auth-store";
import { useSoundStore } from "@/store/sound";

const steps = [
  {
    key: "scissors",
    title: "Tesoura",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 0,
    image: "/assets/Group-4.png",
  },
  {
    key: "rock",
    title: "Pedra",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 1,
    image: "/assets/Group-2.png",
  },
  {
    key: "paper",
    title: "Papel",
    emojiList: ["✌️", "✊", "🖐️"],
    highlight: 2,
    image: "/assets/Group-6.png",
  },
];

export default function OnboardingFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();
  const current = steps[stepIndex];
  const currentUser = useAuthStore((u) => u.currentUser);
  const isPlaying = useSoundStore((s) => s.isPlaying);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      if (currentUser) {
        navigate("/waiting-rps");
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (isPlaying && stepIndex > 0) {
      const audio = new Audio("/sounds/swipe-audio-1.mp3");

      audio.volume = 0.5;
      audio.play();
    }
  }, [stepIndex, isPlaying]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex">
      <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center justify-between h-full z-10 gap-y-20">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <motion.div
            animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
            className="h-full bg-orange-400"
            initial={{ width: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center justify-center gap-y-8"
            exit={{ opacity: 0, x: -50 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={current.image}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                alt={current.title}
                height={160}
                src={current.image}
                width={160}
              />
            </motion.div>

            <div className="flex justify-center gap-6">
              {current.emojiList.map((emoji, index) => (
                <span
                  key={index}
                  className={`${index === current.highlight ? "text-yellow-400 text-3xl" : "text-white text-2xl"}`}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <h1 className="dark:text-white text-4xl font-bold">
              {current.title}
            </h1>

            <div className="flex gap-x-2">
              {(stepIndex === 1 || stepIndex === 2) && (
                <Button
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-lg font-semibold"
                  onPress={() => {
                    setStepIndex(stepIndex - 1);
                    if (isPlaying) {
                      const audio = new Audio("/sounds/swipe-audio-1.mp3");

                      audio.volume = 0.5;
                      audio.play();
                    }
                  }}
                >
                  Voltar
                </Button>
              )}
              <Button
                className="bg-[#FBC399] text-gray-700 hover:bg-orange-300 text-lg font-semibold"
                onPress={handleNext}
              >
                {stepIndex === steps.length - 1 ? "Iniciar" : "Próximo"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

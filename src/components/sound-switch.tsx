import { Button } from "@heroui/button";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { useSoundStore } from "@/store/sound";

export const SoundSwitch = ({ color }: soundSwitchStyleProps) => {
  const { isPlaying, toggleSound } = useSoundStore();

  useEffect(() => {
    if (isPlaying) {
      const audio = new Audio("/sounds/sound-switch-audio-1.mp3");

      audio.volume = 0.5;
      audio.play();
    }
  }, [isPlaying]);

  const handleButton = () => {
    toggleSound();
  };

  return (
    <Button
      isIconOnly
      aria-label={isPlaying ? "Desligar som" : "Ligar som"}
      variant="light"
      onPress={handleButton}
    >
      <motion.span
        key={isPlaying ? "on" : "off"}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isPlaying ? (
          <SpeakerWaveIcon className={`size-6 ${color}`} />
        ) : (
          <SpeakerXMarkIcon className={`size-6 ${color}`} />
        )}
      </motion.span>
    </Button>
  );
};

export interface soundSwitchStyleProps {
  color: string;
}

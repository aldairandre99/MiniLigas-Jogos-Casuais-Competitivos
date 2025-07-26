import { Button } from "@heroui/button";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useSoundStore } from "@/store/sound";
import { useRef } from "react";

export const SoundSwitch = ({ color }: soundSwitchStyleProps) => {
    const { isPlaying, toggleSound } = useSoundStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleButton = () => {
        if (!isPlaying) {
            audioRef.current = new Audio("/public/sounds/sound-switch-audio-1.mp3");
            audioRef.current.volume = 0.5;
            audioRef.current.play();
        }
        toggleSound();
    };

    return (
        <Button
            variant="light"
            isIconOnly
            onPress={handleButton}
            aria-label={isPlaying ? "Desligar som" : "Ligar som"}
        >
            <motion.span
                key={isPlaying ? "on" : "off"}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
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

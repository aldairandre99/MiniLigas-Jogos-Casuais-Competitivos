import { CharactOneSvg } from "@/features/rock-paper-scissors/components/svg/charact";
import { CharacttwoSvg } from "@/features/rock-paper-scissors/components/svg/characttwo";
import { useAuthStore } from "@/store/auth-store";
import { useSoundStore } from "@/store/sound";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {Game} from "@/features/rock-paper-scissors/components/game"
export default function FightRPS() {
    const isPlaying = useSoundStore((e) => e.isPlaying)
    const navigate = useNavigate()
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current = new Audio("/sounds/fight-audio-1.mp3")
            audioRef.current.loop = true
            audioRef.current.volume = 0.3
            audioRef.current.play().catch(error => console.log("Erro ao reproduzir áudio:", error));
        }

        return;
    }, [isPlaying,navigate]);

    return (
        <>
            {/* <div className="relative flex flex-col h-screen bg-[#4847C4]">
                <main

                    className="container mx-auto max-w-7xl px-6 flex flex-col flex-grow h-full  justify-around"
                >
                    
                </main>
            </div> */}
            <Game/>
        </>
    );
}

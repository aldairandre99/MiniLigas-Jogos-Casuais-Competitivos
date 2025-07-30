import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CharactOneSvg } from "@/features/rock-paper-scissors/components/svg/charact";
import { CharacttwoSvg } from "@/features/rock-paper-scissors/components/svg/characttwo";
import { useAuthStore } from "@/store/auth-store";
import { useSoundStore } from "@/store/sound";

export default function WaitingRPS() {
  const { currentUser, selectedBot, selectBot } = useAuthStore();
  const isPlaying = useSoundStore((e) => e.isPlaying);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    selectBot()
    if (isPlaying) {
      audioRef.current = new Audio("/sounds/waiting-rps-audio-1.mp3");
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    const timer = setTimeout(() => {
      if (isPlaying && audioRef.current) audioRef.current.pause();
      navigate("/fight-rps");
    }, 5000);

    return () => clearTimeout(timer);
  }, [isPlaying, navigate]);

  if (!currentUser || !selectedBot) return null;

  return (
    <>
      <div className="relative flex flex-col h-screen bg-[#4847C4]">
        <main className="container mx-auto max-w-7xl px-6 flex flex-col flex-grow h-full  justify-around">
          <div className="flex flex-col justify-center items-center  gap-y-2">
            <div>
              <CharactOneSvg />
            </div>
            <div className="flex flex-col justify-center text-center gap-y-1">
              <span className=" text-[#FFCC01]">
                {currentUser?.username.toUpperCase()}
              </span>
              <p className="text-md text-white">
                <span className="text-success-500">
                  {`${currentUser?.victories}`}{" "}
                </span>
                Vitorias
              </p>
              <p className="text-md text-white">
                <span className="text-danger-500">
                  {`${currentUser?.defeats}`}{" "}
                </span>
                Derrotas
              </p>
            </div>
          </div>

          <p className="text-2xl font-bold text-[#FFCC01] text-center">VS</p>

          <div className="flex flex-col justify-center items-center  gap-y-2">
            <div>
              <CharacttwoSvg />
            </div>
            <div className="flex flex-col justify-center text-center gap-y-1">
              <span className=" text-[#FFCC01]">{`${selectedBot?.username}`}{" "}</span>
              <p className="text-md text-white">
                <span className="text-success-500">
                  {`${selectedBot?.victories}`}{" "}
                </span>
                Vitorias
              </p>
              <p className="text-md text-white">
                <span className="text-danger-500">
                  {`${selectedBot?.defeats}`}{" "}
                </span>
                Derrotas
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

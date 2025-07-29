import { HomeIcon, PlayIcon } from "@heroicons/react/24/outline"
import { Navbar } from "@/features/rock-paper-scissors/components/navbar";
import { FemaleSvg } from "@/features/rock-paper-scissors/components/svg/female-hand";
import { FillSvg } from "@/features/rock-paper-scissors/components/svg/fill";
import { MaleHandSvg } from "@/features/rock-paper-scissors/components/svg/male-hand";
import { useSoundStore } from "@/store/sound";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomeRPS() {
  const isPlaying = useSoundStore((e) => e.isPlaying);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex flex-grow flex-col justify-between h-full overflow-x-hidden light:bg-[#F8FAFC]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="w-full max-w-sm m-auto flex justify-center"
          >
            <Image
              src="/assets/Logo-Animation-1.png"
              alt="Rock Paper Scissors Logo"
              className="w-48 h-auto"
            />
          </motion.div>
          <div className="relative w-full max-w-sm m-auto h-4/6 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            >
              <FillSvg />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-20 bottom-0 left-24 z-20"
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}>
              <MaleHandSvg />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-20 bottom-0 right-24"
            >
              <FemaleSvg />
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-sm m-auto"
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}>
              <Button size="lg" className="w-full bg-[#FBC399] text-white">
                Começa Encontrando Seu Oponente
              </Button>
            </motion.div>
          </div>
        </main>
        <div className="container w-full h-[100px] max-w-sm m-auto flex items-center justify-center px-6">
          <ul className="w-full flex justify-between ">
            <li
              onClick={() => {
                if (isPlaying) {
                  const audio = new Audio("/sounds/play-audio-1.mp3");

                  audio.volume = 0.1;
                  audio.play();
                }
                navigate("/waiting-rps");
              }}
            >
              <PlayIcon className="size-10" />
            </li>

            <li
              onClick={() => {
                if (isPlaying) {
                  const audio = new Audio("/sounds/click-audio-1.mp3");

                  audio.volume = 1;
                  audio.play();
                }
                navigate("/");
              }}
            >
              <HomeIcon className="size-10" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

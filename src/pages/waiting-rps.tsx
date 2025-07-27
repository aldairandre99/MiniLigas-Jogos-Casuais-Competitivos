import { Navbar } from "@/features/rock-paper-scissors/components/navbar";
import { useSoundStore } from "@/store/sound";
import { HomeIcon, PlayIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom";

export default function WaitingRPS() {
    const isPlaying = useSoundStore((e) => e.isPlaying)

    const navigate = useNavigate()


    return (
        <>
            <div className="relative flex flex-col h-screen bg-[#4847C4]">
                
                <main

                    className="container mx-auto max-w-7xl px-6 flex-grow h-full overflow-x-scroll light:bg-[#F8FAFC]"
                >


                </main>
               
            </div>
        </>
    );
}

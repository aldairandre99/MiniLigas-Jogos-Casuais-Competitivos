import { Button } from "@heroui/button";
import { TrophyIcon, PlayIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export function Banner() {
    const navigate = useNavigate();

    return (
        <section className="bg-[#4847C4] text-white py-12 px-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-6">
            <div className="flex flex-col items-center justify-center gap-2 text-3xl font-bold md:flex-row">
                <div className="flex flex-col md:items-center">
                    <span className="text-9xl">🎮</span>
                    <span>MiniLigas</span>
                </div>
                <span className="text-yellow-300">Jogos Casuais Competitivos</span>
            </div>
            <p className="text-lg text-white/90 max-w-xl">
                Compita, divirta-se e suba no ranking em segundos com jogos rápidos e emocionantes!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Button
                    size="lg"
                    className="bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition rounded-xl"
                    onPress={() => navigate("/game-select")}
                >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Começar a Jogar
                </Button>

                <Button
                    variant="light"
                    size="lg"
                    className="border-white border text-white hover:bg-white/10 transition rounded-xl"
                    onPress={() => navigate("/ranking")}
                >
                    <TrophyIcon className="w-5 h-5 mr-2" />
                    Ver Ranking 🔥
                </Button>
            </div>
        </section>
    );
}

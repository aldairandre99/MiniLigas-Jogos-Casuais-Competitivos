import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FemaleSvg } from "@/features/rock-paper-scissors/components/FemaleSvg";
import { MaleHandSvg } from "@/features/rock-paper-scissors/components/MaleHandSvg";
import { VerticalTimeline } from "./verticalTimeline";

interface Choice {
  name: "Rock" | "Paper" | "Scissor";
  icon: string;
}

export const Game = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice["name"] | null>(null);
  const [opponentChoice, setOpponentChoice] = useState<Choice["name"] | null>(
    null,
  );
  const [round, setRound] = useState(1);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const choices: Choice[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissor", icon: "✌️" },
  ];

  const handleChoice = (choice: Choice["name"]) => {
    if (round <= 3) {
      setPlayerChoice(choice);
      setOpponentChoice(null);

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      const randomChoice =
        choices[Math.floor(Math.random() * choices.length)].name;

      setTimeout(() => {
        setOpponentChoice(randomChoice);

        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }, 300);

      setRound((prev) => prev + 1);
    }

    if (round === 3) {
      setTimeout(() => {
        setPlayerChoice(null);
        setOpponentChoice(null);
        setRound(1);
      }, 2000);
    }
  };

  const determineWinner = () => {
    if (!playerChoice || !opponentChoice) return null;
    if (playerChoice === opponentChoice) return "Draw!";
    if (
      (playerChoice === "Rock" && opponentChoice === "Scissor") ||
      (playerChoice === "Paper" && opponentChoice === "Rock") ||
      (playerChoice === "Scissor" && opponentChoice === "Paper")
    )
      return "You Win!";

    return "Opponent Wins!";
  };

  const winner = determineWinner();

  return (
    <div className="bg-[#4847C4] h-screen flex flex-col items-center justify-between text-white relative px-4">
      <audio ref={audioRef} preload="auto" src="/sounds/swipe-audio-1.mp3" />

      <div className="flex items-center justify-between w-full">
        <Button
          isIconOnly
          endContent={<ChevronLeftIcon className="size-10 text-white" />}
          variant="light"
          onPress={() => {
            audioRef.current?.pause();
            navigate("/home-rps");
          }}
        />
        <h1 className="text-2xl font-bold">Round {round}</h1>
      </div>

      {winner && <p className="text-xl mt-4">{winner}</p>}

      <div className="grid grid-cols-3 grid-rows-3 justify-center fixed -bottom-10 z-10">
        <div />
        <div className="w-full flex justify-center">
          <Button
            className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
            disabled={round > 3}
            onPress={() => handleChoice("Rock")}
          >
            <span className="text-white text-xl">Rock</span>
          </Button>
        </div>
        <div />

        <div className="w-full flex justify-center">
          <Button
            className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
            disabled={round > 3}
            onPress={() => handleChoice("Paper")}
          >
            <span className="text-white text-2xl">Paper</span>
          </Button>
        </div>
        <div />

        <div className="w-full flex justify-center">
          <Button
            className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
            disabled={round > 3}
            onPress={() => handleChoice("Scissor")}
          >
            <span className="text-white text-2xl">Scissor</span>
          </Button>
        </div>
        <div />

        <div className="w-full flex justify-center">
          <Button
            className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[100px] h-[100px]"
            disabled={round > 3}
            onPress={() =>
              handleChoice(
                choices[Math.floor(Math.random() * choices.length)].name,
              )
            }
          >
            <span className="text-white text-2xl">Random</span>
          </Button>
        </div>
        <div />
      </div>

      <div className="fixed top-0">
        <FemaleSvg choice={opponentChoice} />
      </div>
      <div className="fixed bottom-0">
        <MaleHandSvg choice={playerChoice} />
      </div>
      <VerticalTimeline/>
      {round > 3 && <p className="text-xl mt-4">Game Over! Restarting...</p>}
    </div>
  );
};

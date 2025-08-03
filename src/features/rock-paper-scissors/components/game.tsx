import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { VerticalTimeline } from "./verticalTimeline";

import { FemaleSvg } from "@/features/rock-paper-scissors/components/FemaleSvg";
import { MaleHandSvg } from "@/features/rock-paper-scissors/components/MaleHandSvg";
import { useAuthStore } from "@/store/auth-store";

import {
  Modal,
  ModalBody,
  ModalContent,
} from "@heroui/modal";
import admPhoto from "/assets/adminPhoto.png";
import userPhoto from "/assets/userPhoto.png";
import { Image } from "@heroui/image";

interface Choice {
  name: "Rock" | "Paper" | "Scissor";
}


export const Game = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice["name"] | null>(null);
  const [opponentChoice, setOpponentChoice] = useState<Choice["name"] | null>(
    null,
  );
  const [round, setRound] = useState(1);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current) {
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}sounds/swipe-audio-1.mp3`);
  }
  const choices: Choice[] = [
    { name: "Rock" },
    { name: "Paper" },
    { name: "Scissor" },
  ];
  const [timelineKey, setTimelineKey] = useState(0);
  const [hasScored, setHasScored] = useState(false);
  const { incrementVictory, incrementDefeat, currentUser } = useAuthStore()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [areChoicesDisabled, setAreChoicesDisbled] = useState(false);
  const handleChoice = (choice: Choice["name"]) => {
    if (round > 3 || areChoicesDisabled) return;

    setAreChoicesDisbled(true)
    setPlayerChoice(choice);
    setOpponentChoice(null);
    setAreChoicesDisbled(true)

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

      setTimeout(() => {
        if (round === 3) {
          setRound(round + 1);
        } else {
          setRound((prev) => prev + 1);
        }

        setTimelineKey((k) => k + 1);
        setPlayerChoice(null);
        setOpponentChoice(null);
        setHasScored(false);
      }, 2000);
    }, 1000);
  };

  const handleTimelineEnd = () => {
    if (!playerChoice && round <= 3) {
      const random = choices[Math.floor(Math.random() * choices.length)].name;

      handleChoice(random);
    }
  };

  const determineWinner = () => {
    if (!playerChoice || !opponentChoice) return null;
    if (playerChoice === opponentChoice) return "Draw!";
    if (
      (playerChoice === "Rock" && opponentChoice === "Scissor") ||
      (playerChoice === "Paper" && opponentChoice === "Rock") ||
      (playerChoice === "Scissor" && opponentChoice === "Paper")
    ) {
      return "You Win!";
    }

    return "Opponent Wins!";
  };

  const winner = determineWinner();

  useEffect(() => {
    if (!hasScored && winner && playerChoice && opponentChoice && areChoicesDisabled) {
      setHasScored(true);

      const showModalTimeout = setTimeout(() => {
        if (winner === "You Win!") {
          incrementVictory();
          setResultMessage("Você venceu! 🎉");
        } else if (winner === "Opponent Wins!") {
          incrementDefeat();
          setResultMessage("Você perdeu! 😢");
        } else {
          setResultMessage("Empate! 🤝");
        }

        setIsModalOpen(true);
        setTimelineKey(0)
        setAreChoicesDisbled(false)

        const closeModalTimeout = setTimeout(() => {
          setIsModalOpen(false);
        }, 1000);

        return () => clearTimeout(closeModalTimeout);
      }, 1000);

      return () => clearTimeout(showModalTimeout);
    }
  }, [playerChoice, opponentChoice]);


  return (
    <div className="bg-[#4847C4] h-screen flex flex-col items-center justify-between text-white relative px-4">

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

      <div className="grid grid-cols-3 grid-rows-3 justify-center fixed -bottom-10 z-10 place-items-center">
        <div />
        <div className="flex items-center rounded-full justify-center w-[60px] h-[60px] bg-blue-700 hover:bg-blue-600 transition">
          <Button
            variant="light"
            className="p-0"
            disableAnimation={true}
            isDisabled={round > 3}
            onPress={() => handleChoice("Rock")}
          >
            <span className="text-white">Pedra</span>
          </Button>
        </div>
        <div />

        <div className="flex items-center rounded-full justify-center w-[60px] h-[60px] bg-blue-700 hover:bg-blue-600 transition">
          <Button
            variant="light"
            className="p-0"
            disableAnimation={true}
            isDisabled={round > 3}
            onPress={() => handleChoice("Paper")}
          >
            <span className="text-white">Papel</span>
          </Button>
        </div>
        <div />

        <div className="flex items-center rounded-full justify-center w-[60px] h-[60px] bg-blue-700 hover:bg-blue-600 transition">
          <Button
            variant="light"
            className="p-0"
            disableAnimation={true}
            isDisabled={round > 3}
            onPress={() => handleChoice("Scissor")}
          >
            <span className="text-white">Tesoura</span>
          </Button>
        </div>
        <div />

        <div className="flex items-center rounded-full justify-center w-[80px] h-[80px] bg-blue-700 hover:bg-blue-600 transition">
          <Button
            variant="light"
            className="p-0 pb-6"
            disableAnimation={false}
            isDisabled={round > 3}
            onPress={() =>
              handleChoice(
                choices[Math.floor(Math.random() * choices.length)].name,
              )
            }
          >
            <span className="text-white ">Random</span>
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
      {round <= 3 && (
        <VerticalTimeline
          duration={5}
          resetTrigger={timelineKey}
          onTimeEnd={handleTimelineEnd}
        />
      )}

      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen} hideCloseButton >
        <ModalContent className="max-w-[312px] h-[411px] my-auto">
          {() => (
            <>
              <ModalBody className="flex flex-col gap-y-4 items-center justify-center">
                <h1 className="text-2xl font-bold">{resultMessage}</h1>
                <Image src={`${currentUser?.type === "admin" ? admPhoto : userPhoto} `} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

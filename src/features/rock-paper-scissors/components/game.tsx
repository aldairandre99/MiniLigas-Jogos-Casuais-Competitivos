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

const CHOICES = ["Rock", "Paper", "Scissor"] as const;
const MAX_ROUNDS = 3;
const BOT_PLAY_DELAY = 1000;
const NEXT_ROUND_DELAY = 2000;

export const Game = () => {
  const [playerChoice, setPlayerChoice] = useState<typeof CHOICES[number] | null>(null);
  const [opponentChoice, setOpponentChoice] = useState<typeof CHOICES[number] | null>(null);
  const [round, setRound] = useState(1);
  const [timelineKey, setTimelineKey] = useState(0);
  const [hasScored, setHasScored] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [areChoicesDisabled, setAreChoicesDisabled] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(new Audio(`${import.meta.env.BASE_URL}sounds/swipe-audio-1.mp3`));
  const navigate = useNavigate();
  const { incrementVictory, incrementDefeat, currentUser } = useAuthStore();

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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

  const handleChoice = (choice: typeof CHOICES[number]) => {
    if (round > MAX_ROUNDS || areChoicesDisabled) return;

    setAreChoicesDisabled(true);
    setPlayerChoice(choice);
    setOpponentChoice(null);
    playAudio();

    const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];

    setTimeout(() => {
      setOpponentChoice(randomChoice);
      playAudio();

      setTimeout(() => {
        setRound((prev) => prev + 1);
        setTimelineKey((k) => k + 1);
        setPlayerChoice(null);
        setOpponentChoice(null);
        setHasScored(false);
      }, NEXT_ROUND_DELAY);
    }, BOT_PLAY_DELAY);
  };

  const handleTimelineEnd = () => {
    if (!playerChoice && round <= MAX_ROUNDS) {
      const random = CHOICES[Math.floor(Math.random() * CHOICES.length)];
      handleChoice(random);
    }
  };

  const winner = determineWinner();

  useEffect(() => {
    if (!hasScored && winner && playerChoice && opponentChoice && areChoicesDisabled) {
      setHasScored(true);

      const showModalTimeout = setTimeout(() => {
        switch (winner) {
          case "You Win!":
            incrementVictory();
            setResultMessage("Você venceu! 🎉");
            break;
          case "Opponent Wins!":
            incrementDefeat();
            setResultMessage("Você perdeu! 😢");
            break;
          default:
            setResultMessage("Empate! 🤝");
        }

        setIsModalOpen(true);
        setTimelineKey(0);
        setAreChoicesDisabled(false);

        const closeModalTimeout = setTimeout(() => setIsModalOpen(false), 1000);
        return () => clearTimeout(closeModalTimeout);
      }, 1000);

      return () => clearTimeout(showModalTimeout);
    }
  }, [playerChoice, opponentChoice]);

  const ChoiceButton = ({ choice }: { choice: typeof CHOICES[number] }) => (
    <div className="flex items-center rounded-full justify-center w-[60px] h-[60px] bg-blue-700 hover:bg-blue-600 transition">
      <Button
        variant="light"
        className="p-0"
        disableAnimation
        isDisabled={round > MAX_ROUNDS}
        onPress={() => handleChoice(choice)}
      >
        <span className="text-white">{choice}</span>
      </Button>
    </div>
  );

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
        <ChoiceButton choice="Rock" />
        <div />
        <ChoiceButton choice="Paper" />
        <div />
        <ChoiceButton choice="Scissor" />
        <div />
        <div className="flex items-center rounded-full justify-center w-[80px] h-[80px] bg-blue-700 hover:bg-blue-600 transition">
          <Button
            variant="light"
            className="p-0 pb-6"
            disableAnimation={false}
            isDisabled={round > MAX_ROUNDS}
            onPress={() => handleChoice(CHOICES[Math.floor(Math.random() * CHOICES.length)])}
          >
            <span className="text-white">Random</span>
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

      {round <= MAX_ROUNDS && (
        <VerticalTimeline
          duration={5}
          resetTrigger={timelineKey}
          onTimeEnd={handleTimelineEnd}
        />
      )}

      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen} hideCloseButton>
        <ModalContent className="max-w-[312px] h-[411px] my-auto">
          {() => (
            <ModalBody className="flex flex-col gap-y-4 items-center justify-center">
              <h1 className="text-2xl font-bold">{resultMessage}</h1>
              <Image src={currentUser?.type === "admin" ? admPhoto : userPhoto} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

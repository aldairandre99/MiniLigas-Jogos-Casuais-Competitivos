import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FemaleSvg } from "@/features/rock-paper-scissors/components/FemaleSvg";
import { MaleHandSvg } from "@/features/rock-paper-scissors/components/MaleHandSvg";

interface Choice {
    name: 'Rock' | 'Paper' | 'Scissor';
    icon: string;
}

export const Game = () => {
    const [playerChoice, setPlayerChoice] = useState<Choice['name'] | null>(null);
    const [opponentChoice, setOpponentChoice] = useState<Choice['name'] | null>(null);
    const [round, setRound] = useState(1);
    const navigate = useNavigate()
    const choices: Choice[] = [
        { name: 'Rock', icon: '✊' },
        { name: 'Paper', icon: '✋' },
        { name: 'Scissor', icon: '✌️' },
    ];

    const handleChoice = (choice: Choice['name']) => {
        if (round <= 3) {
            setPlayerChoice(choice);
            const randomChoice = choices[Math.floor(Math.random() * choices.length)].name;
            setOpponentChoice(randomChoice);
            setRound(round + 1);
        }
        if (round === 3) {
            setTimeout(() => {
                setPlayerChoice(null);
                setOpponentChoice(null);
                setRound(1);
            }, 2000);
        }
    };

    const getHandIcon = (choice: Choice['name'] | null): JSX.Element | null => {
        const selectedChoice = choices.find(c => c.name === choice);
        return selectedChoice ? <span className="text-white text-4xl">{selectedChoice.icon}</span> : null;
    };

    const determineWinner = () => {
        if (!playerChoice || !opponentChoice) return null;
        if (playerChoice === opponentChoice) return "Draw!";
        if (
            (playerChoice === 'Rock' && opponentChoice === 'Scissor') ||
            (playerChoice === 'Paper' && opponentChoice === 'Rock') ||
            (playerChoice === 'Scissor' && opponentChoice === 'Paper')
        ) return "You Win!";
        return "Opponent Wins!";
    };

    const winner = determineWinner();

    return (
        <div className="bg-[#4847C4] h-screen flex flex-col items-center justify-between text-white relative px-4">
            <div className="flex items-center justify-between w-full">
                <Button
                    isIconOnly
                    variant="light"
                    endContent={
                        <ChevronLeftIcon className="size-10 text-white" />
                    }
                    onPress={() => {
                        navigate("/home-rps")
                    }}
                />
                <h1 className="text-2xl font-bold">Round {round}</h1>
            </div>
            {winner && <p className="text-xl mt-4">{winner}</p>}
            <div className="grid grid-cols-3 grid-rows-3 justify-center fixed -bottom-10 z-10">
                <div></div>
                <div className="w-full flex justify-center">
                    <Button
                        key={choices[0].name}
                        className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
                        onPress={() => handleChoice(choices[0].name)}
                        disabled={round > 3}
                    >
                        <span className="text-white text-xl">{choices[0].name}</span>
                    </Button>
                </div>
                <div></div>
                <div className="w-full flex justify-center">
                    <Button
                        key={choices[1].name}
                        className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
                        onPress={() => handleChoice(choices[1].name)}
                        disabled={round > 3}
                    >
                        <span className="text-white text-2xl">{choices[1].name}</span>
                    </Button>
                </div>
                <div></div>
                <div className="w-full flex justify-center">
                    <Button
                        key={choices[2].name}
                        className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[80px] h-[80px]"
                        onPress={() => handleChoice(choices[2].name)}
                        disabled={round > 3}
                    >
                        <span className="text-white text-2xl">{choices[2].name}</span>
                    </Button>
                </div>
                <div></div>
                <div className="w-full flex justify-center">
                    <Button
                        className="bg-blue-700 rounded-full hover:bg-blue-600 transition w-[100px] h-[100px]"
                        onPress={() => handleChoice(choices[Math.floor(Math.random() * choices.length)].name)}

                    >
                        <span className="text-white text-2xl">Random</span>
                    </Button>
                </div>
                <div></div>
            </div>
            <div
                id="female-hands" 
                className="fixed top-0">
                <FemaleSvg choice={opponentChoice} />
            </div>
            <div
            id="female-hands" 
            className="fixed bottom-0   ">
                <MaleHandSvg choice={playerChoice} />
            </div>
            {round > 3 && (
                <p className="text-xl mt-4">Game Over! Restarting...</p>
            )}
        </div>
    );
};
import { useState } from "react";

interface Choice {
    name: 'Rock' | 'Paper' | 'Scissor';
    icon: string;
}

export const Game = () => {
    const [playerChoice, setPlayerChoice] = useState<Choice['name'] | null>(null);
    const [opponentChoice, setOpponentChoice] = useState<Choice['name'] | null>(null);
    const [round, setRound] = useState(1);

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
            }, 2000); // Reinicia após 2 segundos
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
        <div className="bg-blue-900 h-screen flex flex-col items-center justify-center text-white relative">
            <h1 className="text-2xl font-bold mb-4">Round {round}</h1>
            <div className="flex justify-between w-full max-w-md px-4">
                <div className="flex flex-col items-center">
                    {getHandIcon(playerChoice || 'Paper')}
                    <p className="mt-2">You</p>
                </div>
                <div className="flex flex-col items-center">
                    {getHandIcon(opponentChoice || 'Scissor')}
                    <p className="mt-2">Opponent</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-yellow-400 mt-8">FIGHT</h2>
            <p className="text-sm mt-2">0:30</p>
            {winner && <p className="text-xl mt-4">{winner}</p>}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {round <= 3 && choices.map((choice) => (
                    <button
                        key={choice.name}
                        className="bg-blue-700 p-4 rounded-full hover:bg-blue-600 transition"
                        onClick={() => handleChoice(choice.name)}
                        disabled={round > 3}
                    >
                        <span className="text-white text-2xl">{choice.name}</span>
                    </button>
                ))}
                {round <= 3 && (
                    <button
                        className="bg-blue-700 p-4 rounded-full hover:bg-blue-600 transition"
                        onClick={() => handleChoice(choices[Math.floor(Math.random() * choices.length)].name)}
                        disabled={round > 3}
                    >
                        <span className="text-white text-2xl">Random</span>
                    </button>
                )}
            </div>
            {round > 3 && <p className="text-xl mt-4">Game Over! Restarting...</p>}
            {/* Adicionando elementos decorativos */}
            <div className="absolute top-10 left-10">
                <span className="text-4xl">🌟</span> {/* Placeholder para o anel */}
            </div>
            <div className="absolute top-20 right-10">
                <span className="text-3xl">👾</span> {/* Placeholder para o rosto azul */}
            </div>
            <div className="absolute bottom-20 right-10">
                <span className="text-3xl">😺</span> {/* Placeholder para o rosto laranja */}
            </div>
        </div>
    );
};
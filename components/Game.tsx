import React, { useState, ChangeEvent, useEffect } from 'react';
import { Refresh } from 'tabler-icons-react';

const game = {
    bingo: 'Bingo',
    lower: 'Lower',
    higher: 'Higher',
};

const generateNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const Game: React.FC = () => {
    const [userInput, setUserInput] = useState<number>(0);
    const [guessingNumber, setGuessingNumber] = useState<number>(
        generateNumber()
    );
    const [gameStatus, setGameStatus] = useState<string>('?');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = Number(event.target.value.replace(/[^\d.-]/g, ''));
        setUserInput(input);
    };

    const reset = () => {
        setUserInput(0);
        setGuessingNumber(generateNumber());
    };

    useEffect(() => {
        if (userInput === guessingNumber) {
            setGameStatus(game.bingo);
        } else if (userInput > guessingNumber) {
            setGameStatus(game.lower);
        } else if (userInput < guessingNumber) {
            setGameStatus(game.higher);
        }
    }, [userInput]);

    return (
        <div className="group relative max-w-sm h-auto flex items-center justify-center  mx-auto">
            <div className=" absolute -inset-0.5 blur rounded-xl p-10 bg-gradient-to-r from-red-500 to-purple-600  text-white opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl  px-8 py-5 bg-black w-full text-white  ">
                <div className="flex flex-col gap-2 justify-center items-center opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    <h1 className="font-neon text-3xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600 ">
                        Higher Lower Guessing Game
                    </h1>
                    <h3 className="font-bold text-7xl">
                        {gameStatus === game.bingo ? guessingNumber : '?'}
                    </h3>
                    <h2 className="font-black font-mono text-3xl text-white/90">
                        {gameStatus}
                    </h2>
                    <input
                        disabled={gameStatus === game.bingo}
                        type="text"
                        value={userInput}
                        onChange={handleChange}
                        className="rounded-lg border-2 border-slate-900 w-40  focus:outline-none   text-center text-4xl bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-500 to-pink-600 transition-all ease-in-out"
                    />
                    <button
                        onClick={reset}
                        className="rounded-sm w-20 px-5 py-1  flex justify-center items-center border-2 border-red-400 text-red-400 hover:border-red-500 hover:text-red-500 transition-colors delay-75 ease-in-out"
                    >
                        <Refresh className="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Game;

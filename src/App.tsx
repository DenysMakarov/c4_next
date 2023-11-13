import React, {useState} from 'react';
import './App.scss';
import {PLAYERS} from "./utils/constants";
import Board from "./cmps/board/Board";
import {EMPTY_BOARD} from "./utils/utils";

const mockBoard = [
    [1, null, null, null, null, null],
    [null, null, 2, null, null, null],
    [1, null, null, null, null, null],
    [null, null, null, null, null, 1],
    [null, 2, 1, null, null, null],
    [null, null, null, null, null, null],
    [2, 2, null, null, null, null],
]

const  App = () => {

    const [board, setBoard] = useState(EMPTY_BOARD);
    const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.RED);
    const [winner, setWinner] = useState<string | null>(null);

    console.log(board)
    const dropToken = () => {
    }
    const resetGame = () => {
    }

    return (
        <div className="App">
            <h1>Connect Four</h1>
            <h2>{winner ? winner : `${currentPlayer}'s turn`}</h2>

            <Board
                // board={board}
                // dropToken={dropToken}
                board={mockBoard}

            />

            {winner && <button onClick={resetGame}>Play Again</button>}
        </div>
    );
}

export default App;

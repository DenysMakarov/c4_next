import React, {FC} from 'react';
import Cell from "../cell/Cell";


interface IPropBoard {
    board: (string | number | null)[][];
}
const Board : FC<IPropBoard> = ({board}) => {

    return (
        <div className="board">
            {board.map((column, colIndex) => (
                <div key={colIndex} className="column">
                    {column.map((cell, rowIndex) => (
                        <Cell cell={cell} colIndex={colIndex} rowIndex={rowIndex} key={`${colIndex}-${rowIndex}`} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;

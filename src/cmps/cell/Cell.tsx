import React, {FC} from 'react';

interface IPropCell{
    cell: string | number | null,
    colIndex: number,
    rowIndex: number
}
const Cell: FC<IPropCell> = ({cell, colIndex, rowIndex}) => {

    let playerClass = cell === 1 ? 'red' : cell === 2 ? 'yellow' : null;

    return (
        <div className="cell"
             // onClick={() => dropToken(colIndex)}
            key={`${colIndex}-${rowIndex}`}
        >
            {cell && <div className={`token ${playerClass}`}></div>}
        </div>
    )

}

export default Cell;

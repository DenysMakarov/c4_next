import {NUM_COLS, NUM_ROWS} from "./constants";

const EMPTY_BOARD = () => Array(NUM_COLS).fill(null).map(() => Array(NUM_ROWS).fill(null));

export {
    EMPTY_BOARD
}

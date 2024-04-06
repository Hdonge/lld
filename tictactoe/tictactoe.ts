/***
 * Requirement: TicTacToe
 * - Should be able setup board with rows and columns
 * - User one after another should be able to place their pieces on given cell 
 * - 
 * 
 * 
 * Entities
 *  - Game
 *  - Board
 *  - Cell
 *  - PlayingPieceType
 */
class Game {
    board: Board = new Board();
    players: Array<Player> = [];


    // first setup entire board with with required dimessions for given rows and columns
    // then start game with one by one turn to mark cell
}

class Board {
    size: number = 0;
    cells: Array<Array<Cell>> = [];

    //inialize board with all null cells
    initialize(): void { }

    addPiece(pieceType: PieceType): void { }
}

class Cell {
    x: number = 0;
    y: number = 0;
    pieceType: PieceType = PieceType.NULL;
}

enum PieceType {
    NULL = 'null',
    X = 'x',
    O = 'o'
}
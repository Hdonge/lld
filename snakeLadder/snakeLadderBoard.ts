/**
 * Requirement: 
 * - Should be able to setup board with cells , jumps (snake and ladder)
 * - User should be able roll dice and based on count should be able to move position forward
 * - On reaching position of Jump either front or back jump movement should happen
 *  
 * 
 * Entities:
 *  - Game
 *  - Board
 *  - Player
 *  - Dice
 *  - Cell
 *  - Jump - Snake & Ladder
 */


class Game {
    board: Board = new Board();
    dice: Dice = new Dice();
    players: Array<Player> = [];

    // setup Board

    // add Users

    // Start Game until winner is found
    startGame(): void {
        let winner: User | null = null;
        queue: [];

        while (winner === null) {
           // find player turn

           // roll dice

           //move position on board
        }
    }
}

class Board {
    cells: Array<Cell> = [];

    //initialize board
    // setup snakes
    // setup ladders
}

class Cell {
    position: number = 1;
    x: number = 0;
    y: number = 0;
    jump: Jump | null = null;
}

class Jump {
    start: number = 0;
    end: number = 0;
}

class Dice {
    getRandomDiceNumber(): number {
        return 1; // this will have entire logic for radoom number between 1 to 6
    }
}

class User {
    id: number = 0;
    name: string = '';
    position: number;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////

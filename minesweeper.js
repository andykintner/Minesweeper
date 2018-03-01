//Minesweeper Project Iteration 5
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.fliptile(rowIndex, columnIndex);
  }
  if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
    console.log('The game is over');
    print(this._board);
  }
  else if (this._board.hasSafeTiles()) {
    console.log('you won');
  }
  else {
    console.log('keep playing');
  }
}


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = (numberOfRows * numberOfColumns);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    get playerBoard () {
      return this._playerBoard;
    }
    flipTile = (rowIndex, columnIndex) => {
      if(this._playerBoard[rowIndex][columnIndex] != ' ') {
        console.log('This tile has already been flipped!');
        return
      }
      else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      }
      else {
        this._playerBoard[rowIndex][columnIndex] =
        getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }
    getNumberOfNeighborBombs (rowIndex, columnIndex) {
      const neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._bombBoard[0].length;
      let this._numberOfBombs = 0;
      neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if(neighborRowIndex >= 0 &&
          neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 &&
          neighborColumnIndex < numberOfColumns) {
          if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
            this._numberOfBombs++;
          }
        }
      });
      return this._numberOfBombs;
    }
    hasSafeTiles () {
      return (this._numberOfTiles !== this._numberOfBombs);
    }
    print(this._board) {
      console.log(this._board.map(row => row.join(' | ')).join('\n'));
    }
    static generatePlayerBoard(numberOfRows, numberOfColumns) {
      const board = [];
      for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
          row.push(' ');
        }
        board.push(row);
      }
      return board;
    }
    static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
      const board = [];
      for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
          row.push(null);
        }
        board.push(row);
      }
      let numberOfBombsPlaced = 0;
      while(numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
          numberOfBombsPlaced++;
        }
      }
      return board;
    }
  }
}





let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board');
printBoard(playerBoard);

const g = new Game(3, 3, 3);
g.playMove(0,1);

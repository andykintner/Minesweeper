//Minesweeper Project Iteration 3
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for(let rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
    const row = [];
    for(let columnCounter = 0; columnCounter < numberOfColumns; columnCounter++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for(let rowCounter = 0; rowCounter < numberOfRows; rowCounter++) {
    const row = [];
    for(let columnCounter = 0; columnCounter < numberOfColumns; columnCounter++){
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    /*
    The code in your while loop has the potential to place bombs
    on top of already existing bombs. This will be fixed when you
    learn about control flow.
    */
  }
  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

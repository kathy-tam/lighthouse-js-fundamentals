//generate 2D array of chess board with 2 queen locations
function generateBoard(whiteQueen, blackQueen){
  let board = [], row = 8, col = 8;
  for(let i = 0; i < row; i++){
    let temp = [];
    for(let j = 0; j < col; j++){
      temp.push(0);
    }
    board.push(temp);
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

//detect whether the queens can attack each other
function queenThreat(generatedBoard){
  let threat = false, row = 8, col = 8;
  queens = [];
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(generatedBoard[i][j] === 1){
        queens.push([i, j]);
      }
    }
  }
  //check rows and columns
  let queen1 = queens[0];
  let queen2 = queens[1];
  if(queen1[0] === queen2[0] || queen1[1] === queen2[1]){ threat = true }
  //check diagonal (if diagonal, slope = 1 or - 1 since you're moving U/D 1 and L/R 1)
  if(Math.abs((queen2[1]-queen1[1])/(queen2[0]-queen1[0])) === 1){ threat = true }
  return threat;
}

//Test 1
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

//Test 2
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
const squareCode = function(message) {
  //remove spaces
  message = message.replace(/ /g, "");
  //find shape of square
  let col = Math.ceil(Math.sqrt(message.length));
  let row = Math.ceil(message.length/col);
  //put letters into 2D array
  let square = [], index = 0;
  for(let i = 0; i < row; i++){
    let temp = [];
    for(let j = 0; j < col; j++){
      temp.push(message[index]);
      index++;
    }
    square.push(temp);
  }
  //encode
  let encoded = "";
  for(let j = 0; j < col; j++){
    for(let i = 0; i < row; i++){
      (square[i][j] === undefined) ? encoded += '' : encoded += square[i][j]; 
    }
    encoded += ' ';
  }
  return encoded;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
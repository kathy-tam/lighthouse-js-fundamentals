const multiplicationTable = function(maxValue) {
  let multTable = "";
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j<= maxValue; j++){
      let result = i*j;
      multTable += `${result} `;
      if(j === maxValue) {
        multTable += "\n";
      }
    }
  }
  return multTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
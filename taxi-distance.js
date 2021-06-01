const blocksAway = function(directions) {
  let x = 0, y = 0, position = {east: 0, north: 0};
  let currentMove = "", distance = 0, facing = 'N'; //assuming it starts facing N
  //move taxi
  for(let i = 0; i < directions.length; i++){
    currentMove = directions[i];
    distance = directions[++i];
    switch(facing){
      case 'N':
      if(currentMove === 'left'){ x-=distance; facing = 'W'; }else{x+= distance; facing = 'E';}
      break;
      case 'E':
      if(currentMove === 'left'){ y+=distance; facing = 'N'; }else{y-= distance; facing = 'S';}
      break;
      case 'S':
      if(currentMove === 'left'){ x+=distance; facing = 'E'; }else{x-= distance; facing = 'W';}
      break;
      case 'W':
      if(currentMove === 'left'){ y-=distance; facing = 'S'; }else{y+= distance; facing = 'N';}
      break;
    }
  }
  //calculate final position
  position.east = x; position.north = y;
  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
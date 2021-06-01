const conditionalSum = function(values, condition) {
  if(values.length === 0){
    return 0;
  }else{
    let sum = 0; //watch scope, make sure declare outside of for loop
    for(let value of values){
      if(condition === "even" && value%2 === 0) {
        sum += value;
      } else if(condition === "odd" && value%2 === 1){
        sum += value;
      }
    }
    return sum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
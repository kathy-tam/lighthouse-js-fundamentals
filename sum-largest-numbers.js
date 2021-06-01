const sumLargestNumbers = function(data) {
  if (data.length === 2) {
    return data[0] + data[1];
  } else {
    let largestNum = 0, secondLargestNum = 0;
    for (let num of data) {
      if (num >= largestNum) {
        //once we find new largest number, then the old one becomes 2nd largest number
        secondLargestNum = largestNum;
        largestNum = num;
      } else if (num >= secondLargestNum) {
        //not greater than largest number, but greater than current 2nd largest number
        secondLargestNum = num;
      }
    }
    return largestNum + secondLargestNum;
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([92, 6, 10, 34]));
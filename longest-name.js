const instructorWithLongestName = function(instructors) {
  let longestNameLength = 0;
  let result;
  for(let instructor of instructors) {
    if(instructor.name.length > longestNameLength){
      longestNameLength = instructor.name.length;
      result = instructor;
    }
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Kathy", course: "Web"},
  {name: "David", course: "iOS"}
]));
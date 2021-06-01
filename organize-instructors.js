const organizeInstructors = function(instructors) {
  let result = new Object();
  for(let instructor of instructors){
    let course = instructor.course;
    (result.hasOwnProperty(course)) ? result[course].push(instructor.name) : result[course] = [instructor.name];  //dot notation didn't work bc string
  }
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
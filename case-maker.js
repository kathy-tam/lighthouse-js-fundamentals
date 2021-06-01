const makeCase = function(input, cases) {
  let text = input;
  //convert string into an array with the string so that the for loop works
  if(typeof cases === "string") {
    let temp = cases;
    cases = [];
    cases.push(temp);
  }
  //prioritize the case styles
  if(cases.length >1) { cases = prioritize(cases) }
  //apply cases
  for(let c of cases){
    switch(c){
      //since more than 1 case can be applied, need to pass text (case applied) as arg rather than input
      case 'camel': text = camel(text); break;
      case 'pascal': text = pascal(text); break;
      case 'snake': text = snake(text); break;
      case 'kebab': text = kebab(text); break;
      case 'title': text = title(text); break;
      case 'vowel': text = vowel(text); break;
      case 'consonant': text = consonant(text); break;
      case 'upper': text = upper(text); break;
      case 'lower': text = lower(text); break;
    }
  }
  return text;
};

function prioritize(cases){
  let priorityList = [];
  for(let c of cases){  //give priority
    switch(c){
      case 'camel':
      case 'pascal':
      case 'snake':
      case 'kebab':
      case 'title': priorityList.push({type:c, num: 1}); break;
      case 'vowel':
      case 'consonant': priorityList.push({type:c, num: 2}); break;
      case 'upper':
      case 'lower': priorityList.push({type:c, num: 3});break;
    }
  }
  priorityList.sort(function(a,b){return a.num - b.num})  //sort them
  cases = []; //now sort the actual cases array
  for(let item of priorityList){
    cases.push(item.type);
  }
  return cases;
}

function camel(input) {
  let text = "";
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      i++;
      text += input[i].toUpperCase();
    }else{
      text += input[i];
    }
  }
  return text;
}

function pascal(input) {
  /*let temp = camel(input);
  return input[0].toUpperCase() + temp.slice(1,temp.length);*/
  let words = input.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join("");
}

function snake(input) {
  return input.replace(/ /g, "_");
}

function kebab(input) {
  return input.replace(/ /g, "-");
}

function title(input) {
  let words = input.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
  /*return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");*/
}

function vowel(input) {
  let text = "";
  for(let i = 0; i < input.length; i++){
    switch(input[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u': text += input[i].toUpperCase(); break;
      default: text += input[i]; break;
    }
  }
  return text;
}

function consonant(input) {
  let text = "";
  for(let i = 0; i < input.length; i++){
    switch(input[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u': text += input[i]; break;
      default: text += input[i].toUpperCase(); break;
    }
  }
  return text;
}

function upper(input) {
  return input.toUpperCase();
}

function lower(input) {
  return input.toLowerCase();
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this IS a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));
const camelCase = function(input) {
  let camelText = "";
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      i++;
      camelText += input[i].toUpperCase();
    }else{
      camelText += input[i];
    }
  }
  return camelText;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
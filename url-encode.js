const urlEncode = function(text) {
  let trimmedText = text.trim();   //Trim white space on outside
  let url = "";   //String are immutable so build new one
  for(let i = 0; i < trimmedText.length; i++){
    (trimmedText[i] === ' ') ? url += '%20' : url += trimmedText[i]; 
  }
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
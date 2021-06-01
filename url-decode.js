const urlDecode = function(text) {
  //split key-value pairs
  let pairs;
  (text.includes("&")) ? pairs = text.split("&") : pairs = [text]
  //split key and value
  let result = [];
  for(let item of pairs){
    result.push(item.split("="));
  }
  //convert '%20' into space
  for(let item of result){
    item[1] = item[1].replace(/%20/g, ' ');
  }
  //create object
  let decoded = new Object();
  for(let item of result){
    decoded[item[0]] = item[1];
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
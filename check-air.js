const checkAir = function (samples, threshold) {
  let count = 0;
  //make sure it's "let of" and not "let in"
  for(let sample of samples){
    if(sample === 'dirty'){
      count++;
    }
  }
  //return keyword goes outside of ternary operator
  return (count/samples.length) < threshold ? 'clean' : 'polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
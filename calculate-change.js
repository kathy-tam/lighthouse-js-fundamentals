const calculateChange = function(total, cash) {
  let change = cash-total;
  let result = new Object();
  while(change > 0){
    let count = 0;
    //use the biggest bill/coin that'll fit into remaining change (without going negative)
    if(change >= 2000){
      count = Math.floor(change / 2000);
      result.twentyDollar = count;
      change = change % 2000;
    }else if(change >= 1000){
      count = Math.floor(change / 1000);
      result.tenDollar = count;
      change = change % 1000;
    }else if(change >= 500){
      count = Math.floor(change / 500);
      result.fiveDollar = count;
      change = change % 500;
    }else if(change >= 200){
      count = Math.floor(change / 200);
      result.twoDollar = count;
      change = change % 200;
    }else if(change >= 100){
      count = Math.floor(change / 100);
      result.oneDollar = count;
      change = change % 100;
    }else if(change >= 25){
      count = Math.floor(change / 25);
      result.quarter = count;
      change = change % 25;
    }else if(change >= 10){
      count = Math.floor(change / 10);
      result.dime = count;
      change = change % 10;
    }else if(change >= 5){
      count = Math.floor(change / 5);
      result.nickel = count;
      change = change % 5;
    }else if(change >= 1){
      count = Math.floor(change / 1);
      result.penny = count;
      change = change % 1;
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
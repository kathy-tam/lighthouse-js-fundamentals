const talkingCalendar = function(date) {
  let year = date.substring(0,4);
  let month = parseMonth(date.substring(5,7));
  let day = parseDay(date.substring(8,10));
  return month + " " + day + ", " + year
};

function parseMonth(date){
  let month;
  switch(date){
    case '01': month = 'January'; break;
    case '02': month = 'February'; break;
    case '03': month = 'March'; break;
    case '04': month = 'April'; break;
    case '05': month = 'May'; break;
    case '06': month = 'June'; break;
    case '07': month = 'July'; break;
    case '08': month = 'August'; break;
    case '09': month = 'September'; break;
    case '10': month = 'October'; break;
    case '11': month = 'November'; break;
    case '12': month = 'December'; break;
  }
  return month;
}

//don't forget break statements
//"or" with cases = fall-through
function parseDay(date){
  let num = parseInt(date), day;
  switch(num){
    case 1:
    case 21:
    case 31: day = num + "st"; break;

    case 2:
    case 22: day = num + "nd"; break;

    case 3:
    case 23: day = num + "rd"; break;

    default: day = num +"th"; break;
  }
  return day;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
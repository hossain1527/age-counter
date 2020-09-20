//condionals, control flows, if else
//18-35 is my target demographic

/*let age = prompt('How old you are?');

if ((age>=18) && (age<=35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}*/

//Switch statement
//differentiate between weekday vs weekend
//day 7 --> Sunday
//day 4 --> Thursday --> weekday
//day 6 --> Saturday -->

var day = prompt("which day is today");

switch (day) {
  case "monday":
    text = "weekday";
    break;

  case "tuesday":
    text = "weekday";
    break;

  case "wednesday":
    text = "weekday";
    break;

  case "wednesday":
    text = "weekday";
    break;

  case "friday":
    text = "weekday";
    break;

  case "saturday":
    text = "weekend";
    break;

  case "sunday":
    text = "weekend";
    break;

  default:
    text = "wrong input";
}

console.log(text);

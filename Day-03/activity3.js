let day = 3;

switch (day) {
  case 1:
    console.log("Today is monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thrusday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Enter a valid number");
}

let scorePercentage = 90;

switch (true) {
  case scorePercentage >= 60:
    console.log("You got grade A");
    break;
  case scorePercentage >= 50:
    console.log("You got grade B");
    break;
  case scorePercentage >= 30:
    console.log("You got grade C");
    break;
  case scorePercentage < 30 && scorePercentage >= 0:
    console.log("Sorry you got failed \nGrade F");
    break;
  default:
    console.log("Enter valid marks %");
}

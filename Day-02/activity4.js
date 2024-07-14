let age = 23;
let isMale = false;

if (age > 21 && isMale) {
  console.log("You are above legal age to marry dear brother");
} else {
  console.log("Sorry brother you are not above legal age to marry");
}

if (age < 18 || !isMale) {
  console.log("You are not adult enough to drive");
}

if (!isMale) {
  console.log("You are female");
}

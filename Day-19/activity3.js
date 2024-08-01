function numberDecode(number) {
  const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
  const res = number.match(regex);

  console.log("Area code:", res[1]);
  console.log("Central office code:", res[2]);
  console.log("Line number:", res[3]);
}

function emailDecoded(email) {
  const regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
  const res = email.match(regex);

  console.log("Username:", res[1]);
  console.log("Domain:", res[2]);
}

numberDecode("(123) 456-7890");
console.log("---------------------------------");
emailDecoded("panghaldee@gmail.com");

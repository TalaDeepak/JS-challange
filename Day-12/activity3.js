class OurError extends Error {
  constructor(msg) {
    super(msg);
  }
}

function customError() {
  throw new OurError("This is our custom error");
}

function checkString(str) {
  if (str === "") {
    throw new OurError("String can't be empty");
  }
  return str.toUpperCase();
}

try {
  let res = checkString("");
  console.log(res);
} catch (error) {
  console.log("Error occured ", error.message);
}

// try {
//   console.log("Calling our customError function");
//   customError();
// } catch (error) {
//   console.log(error);
// }

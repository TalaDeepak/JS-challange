function throwErrorFunction() {
  throw new Error("This is an intentional error");
  // console.log("Not throwing error");
}

try {
  console.log("Inside try block: Before calling throwErrorFunction");
  throwErrorFunction();
  console.log("Inside try block: After calling throwErrorFunction");
} catch (error) {
  console.error("Inside catch block: An error occurred:", error.message);
} finally {
  console.log("Inside finally block: This block always executes");
}

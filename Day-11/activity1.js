function sucessPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am happy");
    }, 2000);
  });
}

function rejectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected after 2 seconds");
    }, 2000);
  });
}

sucessPromise()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(er));

rejectPromise()
  .then((msg) => console.log("msg is", msg))
  .catch((err) => console.log(err));

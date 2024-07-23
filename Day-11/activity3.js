function anotherSucess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("So now it resolved");
    }, 3000);
  });
}

function anotherFail() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Rejected after a long time");
    }, 2000);
  });
}

async function hold() {
  let res = await anotherSucess();
  console.log(res);
}
hold();

async function hold1() {
  try {
    let res = await anotherFail();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
hold1();

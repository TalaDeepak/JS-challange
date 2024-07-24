function random() {
  return new Promise((resovle, reject) => {
    let n = Math.random() * 10;
    if (n < 5) {
      resovle("success achivied ");
    } else {
      reject("Failed here ");
    }
  });
}

async function solve() {
  try {
    let res = await random();
    console.log(res);
  } catch (error) {
    console.log("error ", error);
  }
}

solve();

random()
  .then((res) => console.log(res))
  .catch((error) => {
    console.log("Error occured ⚠️⚠️ ", error);
  });

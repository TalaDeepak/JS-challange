function simulate(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from step ${step}`);
    }, 1000 * step);
  });
}

simulate(1)
  .then((msg) => {
    console.log(msg);
    return simulate(2);
  })
  .then((msg) => {
    console.log(msg);
    return simulate(3);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(`error occured ${er}`));

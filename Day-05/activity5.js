function hof(func, num) {
  while (num--) {
    func(num);
  }
}

hof((num) => {
  console.log(`Happy to went so far  ${num}`);
}, 4);

function hoc1(func1, func2, val) {
  return func2(func1(val));
}

console.log(
  hoc1(
    (val) => val * 2,
    (val) => val * val,
    4
  )
);

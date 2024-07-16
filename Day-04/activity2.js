let res = 0;
let i = 10;
while (i > 0) {
  res += i;
  i--;
}
console.log(res);

let j = 10;

while (j > 0) {
  process.stdout.write(`${j} `);
  j--;
}

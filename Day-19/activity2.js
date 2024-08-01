function capitalWord(str) {
  const regex = /\b[A-Z][a-z]*\b/g;
  const matches = str.match(regex);

  console.log(matches);
}

function digit(str) {
  const regex = /\d+/g;

  const res = str.match(regex);
  console.log(res);
}

capitalWord("Hello World This is a Test");

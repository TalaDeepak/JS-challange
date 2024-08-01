function wordAtbeginning(str) {
  const regex = /^\b\w+\b/;
  const matches = str.match(regex);

  console.log(matches[0]);
}

function wordAtEnd(str) {
  const regex = /\b\w+\b$/;

  console.log(str.match(regex)[0]);
}

wordAtbeginning("Hello is there anyone");
wordAtEnd("Hello is there anyone");

function findAllMatches(str) {
  const regex = /JavaScript/g;
  const matches = str.match(regex);

  console.log(matches);
  return matches;
}

function findAllDigits(str) {
  const regex = /\d+/g;
  const matches = str.match(regex);

  console.log(matches);
}

findAllDigits("There are 123 apples 456 oranges and 789 bananas");

findAllMatches("I love JavaScript . JavaScript is awesome");

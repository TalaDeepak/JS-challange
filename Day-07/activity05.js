let book = {
  title: "Get your dream life",
  author: "Deepak tala",
  year: 2023,
};

for (let i in book) {
  console.log(i, book[i]);
}

Object.keys(book).map((key) => console.log(key));
console.log("-----------_________------------");
Object.values(book).map((val) => console.log(val));

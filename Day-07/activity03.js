let library = {
  name: "Tala library",
  books: [
    {
      name: "geek monk",
      author: "ravis",
    },
    {
      name: "geerm",
      author: "shiwv",
    },
    {
      name: "royal life",
      author: "access",
    },
  ],
  location: "Delhi university",
};

console.log(library);
console.log("------------------_______------------");

console.log(library.name);

console.log("------------------_______------------");
library.books.map((book) => console.log(book.author));

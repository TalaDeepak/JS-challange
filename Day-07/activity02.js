let book = {
  title: "Get your dream life",
  author: "Deepak tala",
  year: 2023,
  getDetails() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
  updateYear(year) {
    this.year = year;
  },
};

console.log(book.getDetails());

book.updateYear(2030);
console.log(book.getDetails());

const { default: axios } = require("axios");
const { chunk } = require("lodash");

let arr = ["a", "b", "c", "d", "e"];

let res = chunk(arr, 2);
console.log(res);

const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

async function getUser() {
  try {
    let res = await axios.get(apiURL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

getUser();

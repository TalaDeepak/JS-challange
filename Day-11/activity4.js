const apiURL = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiURL)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error while fectching data");
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function getData() {
  try {
    let res = await fetch(apiURL);
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

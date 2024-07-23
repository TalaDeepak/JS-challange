let urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

let fetchs = urls.map((url) =>
  fetch(url).then((res) => {
    return res.json();
  })
);

Promise.all(fetchs)
  .then((data) =>
    data.forEach((data, index) => {
      console.log(`Response from URL ${index + 1}:`, data);
    })
  )
  .catch((err) => console.log(err));

Promise.race(fetchs)
  .then((res) => {
    console.log("first resolved msg", res);
  })
  .catch((err) =>
    console.log("There was a problem with the fetch operation: ", err)
  );

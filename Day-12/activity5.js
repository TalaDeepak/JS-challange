const url = "https://invalid-url.example.com/data";

fetch(url)
  .then((res) => {
    if (!res.ok) throw new Error("HTTP error status ", res.status);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Error occured ⚠️⚠️ ", err.message));

async function fetchData() {
  const invalidUrl = "https://invalid-url.example.com/data";

  try {
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();

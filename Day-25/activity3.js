document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value.trim();
  if (query) {
    searchMovies(query);
  }
});

function searchMovies(query) {
  const apiKey = "da979bab"; // Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data to the console
      if (data.Response === "True") {
        displayMovies(data.Search); // Parse and display the movies
      } else {
        console.error("Error:", data.Error);
        displayErrorMessage(data.Error);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function displayMovies(movies) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (movies && movies.length > 0) {
    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");

      movieItem.innerHTML = `
              <img src="${
                movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"
              }" alt="${movie.Title}" class="movie-poster">
              <h2>${movie.Title}</h2>
              <p>Release Year: ${movie.Year}</p>
          `;

      resultsContainer.appendChild(movieItem);
    });
  } else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }
}

function displayErrorMessage(message) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = `<p>${message}</p>`;
}

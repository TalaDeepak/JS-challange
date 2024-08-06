document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
      searchMovies(query);
  }
});

function searchMovies(query) {
  const apiKey = 'da979bab'; // Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data); // Log the response data to the console
          if (data.Response === 'True') {
              displayMovies(data.Search); // Parse and display the movies
          } else {
              console.error('Error:', data.Error);
              displayErrorMessage(data.Error);
          }
      })
      .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  if (movies && movies.length > 0) {
      movies.forEach(movie => {
          const movieItem = document.createElement('div');
          movieItem.classList.add('movie-item');

          movieItem.innerHTML = `
              <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}" class="movie-poster">
              <h2>${movie.Title}</h2>
              <p>Release Year: ${movie.Year}</p>
              <button class="more-info-button" data-imdbid="${movie.imdbID}">More Info</button>
          `;

          resultsContainer.appendChild(movieItem);
      });

      // Add event listeners to all "More Info" buttons
      document.querySelectorAll('.more-info-button').forEach(button => {
          button.addEventListener('click', function() {
              const imdbID = this.getAttribute('data-imdbid');
              fetchMovieDetails(imdbID);
          });
      });
  } else {
      resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}

function fetchMovieDetails(imdbID) {
  const apiKey = 'da979bab'; // Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data); // Log the detailed movie data
          displayMovieDetails(data); // Display the movie details in a modal
      })
      .catch(error => console.error('Error fetching data:', error));
}

function displayMovieDetails(movie) {
  const modal = document.getElementById('movie-modal');
  const modalDetails = document.getElementById('modal-details');

  modalDetails.innerHTML = `
      <h2>${movie.Title}</h2>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}" class="movie-poster">
  `;

  // Show the modal
  modal.style.display = 'block';

  // Close the modal when the close button is clicked
  document.getElementById('close-modal').addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close the modal when the user clicks outside the modal content
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
}

function displayErrorMessage(message) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = `<p>${message}</p>`;
}

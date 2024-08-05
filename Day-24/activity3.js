const apiKey = "f00c38e0279b7bc85480c3fe775d518c"; // Replace with your OpenWeatherMap API key

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city name");
  }
});

function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the entire response to the console

      // Parse the weather data
      const temperature = data.main.temp;
      const weatherCondition = data.weather[0].description;
      const cityName = data.name;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Display the data on the web page
      document.getElementById("temp").textContent = `${temperature}°C`;
      document.getElementById("condition").textContent =
        weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);
      document.getElementById("city").textContent = cityName;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${humidity}%`;
      document.getElementById("wind").textContent = `Wind: ${windSpeed} km/h`;
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      alert("Error: " + error.message);
    });
}

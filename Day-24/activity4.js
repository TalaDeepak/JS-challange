const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; 

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeatherData(city);
        fetchForecastData(city);
    } else {
        alert('Please enter a city name');
    }
});

function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the entire response to the console

            // Parse the weather data
            const temperature = data.main.temp;
            const weatherCondition = data.weather[0].description;
            const cityName = data.name;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherIcon = getWeatherIcon(data.weather[0].icon);

            // Display the data on the web page
            document.getElementById('temp').textContent = `${temperature}°C`;
            document.getElementById('condition').textContent = weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);
            document.getElementById('city').textContent = cityName;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind').textContent = `Wind: ${windSpeed} km/h`;
            document.getElementById('weatherIcon').className = `wi ${weatherIcon}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error: ' + error.message);
        });
}

function fetchForecastData(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the entire response to the console

            const forecastContainer = document.getElementById('forecastContainer');
            forecastContainer.innerHTML = ''; // Clear any previous forecast data

            // Extract daily forecast data (one per day)
            const dailyForecasts = [];
            data.list.forEach(forecast => {
                const date = new Date(forecast.dt_txt);
                const time = date.getHours();

                // Pick the forecast for 12:00 PM each day
                if (time === 12) {
                    dailyForecasts.push(forecast);
                }
            });

            dailyForecasts.forEach(forecast => {
                const date = new Date(forecast.dt_txt);
                const temperature = forecast.main.temp;
                const weatherCondition = forecast.weather[0].description;
                const weatherIcon = getWeatherIcon(forecast.weather[0].icon);

                const dayElement = document.createElement('div');
                dayElement.className = 'day';
                dayElement.innerHTML = `
                    <p><strong>${date.toDateString()}</strong></p>
                    <i class="wi ${weatherIcon}"></i>
                    <p>${temperature}°C</p>
                    <p>${weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1)}</p>
                `;
                forecastContainer.appendChild(dayElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the forecast data:', error);
            alert('Error: ' + error.message);
        });
}

function getWeatherIcon(iconCode) {
       const iconMapping = {
        '01d': 'wi-day-sunny',
        '01n': 'wi-night-clear',
        '02d': 'wi-day-cloudy',
        '02n': 'wi-night-alt-cloudy',
        '03d': 'wi-cloud',
        '03n': 'wi-cloud',
        '04d': 'wi-cloudy',
        '04n': 'wi-cloudy',
        '09d': 'wi-rain',
        '09n': 'wi-rain',
        '10d': 'wi-day-rain',
        '10n': 'wi-night-rain',
        '11d': 'wi-thunderstorm',
        '11n': 'wi-thunderstorm',
        '13d': 'wi-snow',
        '13n': 'wi-snow',
        '50d': 'wi-fog',
        '50n': 'wi-fog'
    };

    return iconMapping[iconCode] || 'wi-day-sunny';
}

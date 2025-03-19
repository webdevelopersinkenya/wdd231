
    const apiKey = 'a70c76b2a1cce5fd622ac6cafe0a1e12';  // Replace with your actual API key
    const city = 'Nairobi';         // Change city as needed

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `Location: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            document.getElementById('weather').textContent = 'Unable to fetch weather data.';
        });


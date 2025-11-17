
//  CONFIGURATION

const apiKey = "a70c76b2a1cce5fd622ac6cafe0a1e12"; // <--- INSERT YOUR KEY HERE
const city = "Nairobi"; // You can change to any city

//  FETCH WEATHER DATA

async function loadWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // For debugging

        // Extract weather info
        const currentWeather = {
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: `${data.main.temp}° C`,
            condition: data.weather[0].description,
            high: `${data.main.temp_max}° C`,
            low: `${data.main.temp_min}° C`,
            humidity: `${data.main.humidity}%`,
            sunrise: formatTime(data.sys.sunrise),
            sunset: formatTime(data.sys.sunset)
        };

        //  POPULATE HTML
        
        const currentWeatherDiv = document.querySelector(".current-weather");

        // Replace icon
        const iconElement = currentWeatherDiv.querySelector(".weather-icon");
        iconElement.innerHTML = `<img src="${currentWeather.icon}" width="70">`;

        currentWeatherDiv.querySelector(".temp").textContent = currentWeather.temp;
        currentWeatherDiv.querySelector(".condition").textContent = capitalize(currentWeather.condition);

        const weatherListItems = currentWeatherDiv.querySelectorAll("ul li");
        weatherListItems[0].textContent = `High: ${currentWeather.high}`;
        weatherListItems[1].textContent = `Low: ${currentWeather.low}`;
        weatherListItems[2].textContent = `Humidity: ${currentWeather.humidity}`;
        weatherListItems[3].textContent = `Sunrise: ${currentWeather.sunrise}`;
        weatherListItems[4].textContent = `Sunset: ${currentWeather.sunset}`;

    } catch (error) {
        console.error("OpenWeatherMap API Error:", error);
    }
}

// =============================
//  FORMATTING FUNCTIONS
// =============================
function formatTime(unixSeconds) {
    const date = new Date(unixSeconds * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes}${ampm}`;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Start weather loading
loadWeather();

// Sample data
const currentWeather = {
    icon: "fas fa-sun",
    temp: "78° F",
    condition: "Partly Cloudy",
    high: "85°",
    low: "52°",
    humidity: "34%",
    sunrise: "6:45am",
    sunset: "7:00pm"
};

// Populate current weather
const currentWeatherDiv = document.querySelector(".current-weather");
currentWeatherDiv.querySelector(".weather-icon").className = currentWeather.icon + " weather-icon";
currentWeatherDiv.querySelector(".temp").textContent = currentWeather.temp;
currentWeatherDiv.querySelector(".condition").textContent = currentWeather.condition;

const weatherListItems = currentWeatherDiv.querySelectorAll("ul li");
weatherListItems[0].textContent = `High: ${currentWeather.high}`;
weatherListItems[1].textContent = `Low: ${currentWeather.low}`;
weatherListItems[2].textContent = `Humidity: ${currentWeather.humidity}`;
weatherListItems[3].textContent = `Sunrise: ${currentWeather.sunrise}`;
weatherListItems[4].textContent = `Sunset: ${currentWeather.sunset}`;


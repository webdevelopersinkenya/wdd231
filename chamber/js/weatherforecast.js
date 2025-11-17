// ==================================
//  3-DAY FORECAST - OPENWEATHERMAP
// ==================================

const apiKey2 = "a70c76b2a1cce5fd622ac6cafe0a1e12";   // SAME KEY
const city2 = "Nairobi";

async function loadForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city2}&appid=${apiKey2}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const daily = {};

        // Extract only 12:00:00 entries
        data.list.forEach(item => {
            const [date, time] = item.dt_txt.split(" ");
            if (time === "12:00:00") {
                daily[date] = {
                    temp: Math.round(item.main.temp) + "°C",
                    icon: item.weather[0].icon,
                    description: item.weather[0].description
                };
            }
        });

        const forecastArray = Object.keys(daily)
            .slice(0, 3)
            .map((date, index) => ({
                day:
                    index === 0 ? "Today" :
                    index === 1 ? "Tomorrow" :
                    formatDate(date),
                temp: daily[date].temp,
                icon: daily[date].icon,
                description: daily[date].description
            }));

        const list = document.querySelector(".forecast ul");
        list.innerHTML = "";

        forecastArray.forEach(f => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${f.icon}.png" alt="${f.description}">
                ${f.day}: <strong>${f.temp}</strong>
            `;
            list.appendChild(li);
        });

    } catch (error) {
        console.error("ERROR - Forecast:", error);
    }
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", { weekday: "long" });
}

loadForecast();

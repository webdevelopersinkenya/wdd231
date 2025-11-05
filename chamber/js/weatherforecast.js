const forecast = [
    { day: "Today", temp: "90°F" },
    { day: "Wednesday", temp: "89°F" },
    { day: "Thursday", temp: "68°F" }
];

const forecastList = document.querySelector(".forecast ul");
forecastList.innerHTML = ""; // Clear default content

forecast.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `${f.day}: <strong>${f.temp}</strong>`;
    forecastList.appendChild(li);
});


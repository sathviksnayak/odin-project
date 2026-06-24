function displayWeather(data) {

    const content = document.getElementById("content");
    content.innerHTML = "";

    const checkbox = document.getElementById("celsius");
    const isCelsius = checkbox.checked;

    const {
        address
    } = data;

    const {
        temp,
        feelslike,
        humidity,
        windspeed,
        conditions,
        datetime,
        icon
    } = data.currentConditions;

    const shownTemp = isCelsius
        ? toCelsius(temp)
        : Math.round(temp);

    const shownFeels = isCelsius
        ? toCelsius(feelslike)
        : Math.round(feelslike);

    const unit = isCelsius ? "°C" : "°F";

    const forecast = data.days.slice(0, 7);

    content.innerHTML = `

    <div class="weather-hero">

        <div class="hero-left">

            <h2 class="city-name">${address}</h2>

            <div class="weather-icon">
                ${getEmoji(icon)}
            </div>

            <div class="temperature">
                ${shownTemp}${unit}
            </div>

            <p class="condition">
                ${conditions}
            </p>

        </div>

        <div class="hero-right">

            <p>🕒 ${datetime}</p>

            <p>🌡 Feels Like: ${shownFeels}${unit}</p>

            <p>💧 Humidity: ${humidity}%</p>

            <p>🌬 Wind Speed: ${windspeed}</p>

        </div>

    </div>

    <div class="forecast-section">

        <h2 class="forecast-title">
            7 Day Forecast
        </h2>

        <div id="forecast-container"></div>

    </div>
    `;

    const forecastContainer =
        document.getElementById("forecast-container");

    forecast.forEach(day => {

        const maxTemp = isCelsius
            ? toCelsius(day.tempmax)
            : Math.round(day.tempmax);

        const minTemp = isCelsius
            ? toCelsius(day.tempmin)
            : Math.round(day.tempmin);

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <div class="forecast-icon">
                ${getEmoji(day.icon)}
            </div>

            <h3>${day.datetime}</h3>

            <p>Max: ${maxTemp}${unit}</p>

            <p>Min: ${minTemp}${unit}</p>

            <p>${day.conditions}</p>

        `;

        forecastContainer.appendChild(card);
    });
}



function getEmoji(icon) {

    if (icon === "rain") return "🌧️";
    if (icon === "clear-day") return "☀️";
    if (icon === "cloudy") return "☁️";
    if (icon === "partly-cloudy-day") return "⛅";
    if (icon === "snow") return "❄️";

    return "🌍";
}

function toCelsius(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
}

export default displayWeather;
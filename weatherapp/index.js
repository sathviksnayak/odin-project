import getWeather from "./apicall";
import displayWeather from "./display";
import "./styles.css";

const searchBtn = document.getElementById("searchbutton");
const searchBar = document.getElementById("searchcity");
const content = document.getElementById("content");
const checkbox = document.getElementById("celsius");

// store latest fetched weather
let currentWeatherData = null;


// search button
searchBtn.addEventListener("click", async () => {
    
    const searchCity = searchBar.value;

    if (searchCity.trim()) {

        content.innerHTML = "<h2>Loading...</h2>";

        const data = await getWeather(searchCity);

        if (data) {
            currentWeatherData = data;
            displayWeather(data);
        } 
        else {
            content.innerHTML = "<h2>City not found</h2>";
        }
    }
});


// checkbox rerender
checkbox.addEventListener("change", () => {

    if (currentWeatherData) {
        displayWeather(currentWeatherData);
    }

});


// enter key support
searchBar.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});
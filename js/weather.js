const API_KEY = "93833bdbcd1067689d65aebb5936a1a3";

const cityName = document.querySelector(".weather h2");
const nowWeather = document.querySelector(".weather h3");

const savedLocation = localStorage.getItem("location");

if (savedLocation) {
    const { lat, lon } = JSON.parse(savedLocation);
    getWeather(lat, lon);
} else {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    localStorage.setItem("location", JSON.stringify({ lat, lon }));
    
    getWeather(lat, lon);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data && data.weather && data.weather.length > 0) {
                const name = data.name;
                const weather = data.weather[0];
                console.log(`The weather in ${name} is ${weather.description}`);
                
                cityName.innerText = `${name}`;
                nowWeather.innerText = `${weather.description}`;
            } else {
                console.error("No weather data found");
            }
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}

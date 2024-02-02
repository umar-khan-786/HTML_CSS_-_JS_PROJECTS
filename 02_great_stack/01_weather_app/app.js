const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector("button");
const input = document.querySelector("input");
const weatherIcon = document.querySelector(".weather_icon");

const weatherDetails = async (city) => {
  try {
    const response = await fetch(api + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `&deg;C`;
    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/foggy-night.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  }
};
const getWeather = () => {
  weatherDetails(input.value);
};
searchBtn.addEventListener("click", getWeather);

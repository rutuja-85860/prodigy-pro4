const apiKey = "c0ea190456f33b59f3a98613699c7350";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "weather image/images/clouds.png";
      document.querySelector(".card").style.backgroundImage =
        'url("weather image/images/cloudy2.avif")';
      document.querySelector(".card").style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "weather image/images/clear.png";
      document.querySelector(".card").style.backgroundImage =
        'url("weather image/images/clear2.jpg")';
      document.querySelector(".card").style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "weather image/images/drizzle.png";
      document.querySelector(".card").style.backgroundImage =
        'url("weather image/images/rain1.jpg")';
      document.querySelector(".card").style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "weather image/images/mist.png";
      document.querySelector(".card").style.backgroundImage =
        'url("weather image/images/mist1.jpg")';
      document.querySelector(".card").style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "weather image/images/rain.png";
      document.querySelector(".card").style.backgroundImage =
        'url("weather image/images/rain1.jpg")';
      document.querySelector(".card").style.backgroundSize = "cover";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

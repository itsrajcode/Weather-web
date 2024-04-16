// function getCurrentLocationWeather() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(fetchWeatherByCoords);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function fetchWeatherByCoords(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   const apiKey = "50463391ed7530960fc5b6f866b75e15";
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       displayWeather(data);
//     })
//     .catch((error) => {
//       console.log("Error fetching weather:", error);
//     });
// }
// const btn = document.getElementById("searchBtn");
// const weatherIcon = document.querySelector(".weather-icon");

// function getWeatherByCity() {
//     const city = document.getElementById("cityInput").value;
//   const apiKey = "50463391ed7530960fc5b6f866b75e15";
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       displayWeather(data);
//     })
//     .catch((error) => {
//       console.log("Error fetching weather:", error);
//     });
// }
// btn.addEventListener("click", () => {
//   getWeatherByCity();
// });

// function displayWeather(data) {
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = data.main.temp + "°C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//   if (data.weather[0].main == "Clouds") {
//     weatherIcon.src = "src/clouds.png";
//   } else if (data.weather[0].main == "Clear") {
//     weatherIcon.src = "src/clear.png";
//   } else if (data.weather[0].main == "Rain") {
//     weatherIcon.src = "src/rain.png";
//   } else if (data.weather[0].main == "Drizzle") {
//     weatherIcon.src = "src/drizzle.png";
//   } else if (data.weather[0].main == "Mist") {
//     weatherIcon.src = "src/mist.png";
//   }
// }
// getCurrentLocationWeather();

//let weather = {
//paris: {
//temp: 19.7,
//humidity: 80
//},
//tokyo: {
//temp: 17.3,
//humidity: 50
//},
//lisbon: {
//temp: 30.2,
//humidity: 20
//},
//"san francisco": {
//temp: 20.9,
//humidity: 100
//},
//oslo: {
//temp: -5,
//humidity: 20
//}
//};

// write your code here

//let city = prompt("Enter a city?");
//if (city) {
//city = city.toLowerCase().trim();
//}
//if (weather[city]) {
//let temperature = weather[city].temp;
//temperature = Math.round(temperature);
//let humidity = weather[city].humidity;
//alert(
//`The weather in ${city} is ${temperature} and the humidity is at ${humidity}%`
//);
//} else {
//alert(
//`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}.`
//);
//}

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let today = document.querySelector("#date");
today.innerHTML = `${day} ${month}. ${date}, ${year}`;
let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;

// function showCelsius(event) {
//   event.preventDefault();
//   let currentTemperature = document.querySelector("#first-temp");
//   currentTemperature.innerHTML = "10";
// }
// function showFahrenheit(event) {
//   event.preventDefault();
//   let currentTemperature = document.querySelector("#first-temp");
//   currentTemperature.innerHTML = "50";
// }
// let celciusTemperature = document.querySelector("#celsius");
// celciusTemperature.addEventListener("click", showCelsius);

// let fahrenheitTemperature = document.querySelector("#fahrenheit");
// fahrenheitTemperature.addEventListener("click", showFahrenheit);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${searchInput.value}`;
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let units = "metric";
  let apiKey = "8944afa6845bd7c413a687258d3211ef";
  let api = `${url}q=${searchInput.value}&units=${units}&appid=${apiKey}`;
  axios.get(api).then(showRealTemp);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showRealTemp(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#current_temp");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let highTempElement = document.querySelector("#high_temp");
  highTempElement.innerHTML = Math.round(response.data.main.temp_max);
  let lowTempElement = document.querySelector("#low_temp");
  lowTempElement.innerHTML = Math.round(response.data.main.temp_min);
  let windElement = document.querySelector("#wind_speed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

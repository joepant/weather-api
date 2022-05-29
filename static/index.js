async function callAPI() {
  const API_KEY = "9ffae6121cd39eba57d157c1af426ef5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("location-input").value}&appid=${API_KEY}`;
  let weather_data;
  try {
      const response = await fetch(url)
      .then(response => response.json())
      .then(data => weather_data = data)
      changeData(weather_data);
  } catch (error) {
      console.log("Error: ", error)
  }
}

function kelvinToFahrenheit(num) {
  // json returns kevlin, this function converts kelvin to fahrenheit
  fahrenheit = ((parseInt(num)-273.15)*1.8)+32;
  return `${Math.round(fahrenheit)}&#176;F`;
}

function changeData(weather_data) {
  // dynamically set p tags as their respective json values
  document.getElementById("location").innerHTML = JSON.stringify(weather_data.name).replaceAll('"','');
  document.getElementById("temp").innerHTML = `Current temp: ${kelvinToFahrenheit(JSON.stringify(weather_data.main.temp))}`;
  document.getElementById("high").innerHTML = `High: ${kelvinToFahrenheit(JSON.stringify(weather_data.main.temp_max))}`;
  document.getElementById("low").innerHTML = `Low: ${kelvinToFahrenheit(JSON.stringify(weather_data.main.temp_min))}`;
  document.getElementById("humidity").innerHTML = `Humidity: ${JSON.stringify(weather_data.main.humidity)}%`;
  document.getElementById("feels-like").innerHTML = `Feels like: ${kelvinToFahrenheit(JSON.stringify(weather_data.main.feels_like))}`;
}
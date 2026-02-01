

const apiKey = "YOUR_API_KEY_HERE";

let chart;
let hourlyData = {
  temp: [],
  rain: [],
  wind: [],
  time: []
};

function startWeather() {
  const location = document.getElementById("locationInput").value;

  if (location === "") {
    alert("Please enter a location");
    return;
  }

  document.getElementById("searchScreen").classList.add("hidden");
  document.getElementById("weatherScreen").classList.remove("hidden");

  loadWeather(location);
  loadHourlyGraph(location); 
}

function loadWeather(location) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
    .then(res => res.json())
    .then(data => {

      document.getElementById("temp").innerText = data.current.temp_c;
      document.getElementById("condition").innerText = data.current.condition.text;
      document.getElementById("humidity").innerText = data.current.humidity;
      document.getElementById("wind").innerText = data.current.wind_kph;
      document.getElementById("rain").innerText =
        data.forecast.forecastday[0].day.daily_chance_of_rain;

      document.getElementById("icon").src =
        "https:" + data.current.condition.icon;

      document.getElementById("city").innerText =
        data.location.name + ", " + data.location.country;

      document.getElementById("day").innerText =
        new Date().toLocaleDateString("en-US", { weekday: "long" });

      const forecastDiv = document.getElementById("forecast");
      forecastDiv.innerHTML = "";

      data.forecast.forecastday.forEach(day => {
        const div = document.createElement("div");
        div.className = "day";
        div.innerHTML = `
          <p>${new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}</p>
          <img src="https:${day.day.condition.icon}">
          <p>${day.day.maxtemp_c}°</p>
          <p>${day.day.mintemp_c}°</p>
        `;
        forecastDiv.appendChild(div);
      });
    })
    .catch(() => alert("Location not found"));
}



async function loadHourlyGraph(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;
  const res = await fetch(url);
  const data = await res.json();

  const hours = data.forecast.forecastday[0].hour;

  hourlyData.temp = [];
  hourlyData.rain = [];
  hourlyData.wind = [];
  hourlyData.time = [];

  hours.forEach(h => {
    hourlyData.temp.push(h.temp_c);
    hourlyData.rain.push(h.precip_mm);
    hourlyData.wind.push(h.wind_kph);
    hourlyData.time.push(h.time.split(" ")[1]);
  });

  drawGraph("temp"); 
}



function changeTab(type, element) {
  document.querySelectorAll(".tab").forEach(tab =>
    tab.classList.remove("active")
  );

  element.classList.add("active");
  drawGraph(type);
}

function drawGraph(type) {
  const ctx = document.getElementById("weatherChart").getContext("2d");
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: hourlyData.time,
      datasets: [{
        label:
          type === "temp" ? "Temperature (°C)" :
          type === "rain" ? "Precipitation (mm)" :
          "Wind (km/h)",
        data:
          type === "temp" ? hourlyData.temp :
          type === "rain" ? hourlyData.rain :
          hourlyData.wind,
        borderWidth: 3,
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

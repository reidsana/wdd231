const apiKey = "e34af50d981c43914f6e402d7b8fd862";
const lat = 17.9712;
const lon = -76.7936;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("temp").textContent = Math.round(data.list[0].main.temp);
    document.getElementById("desc").textContent = data.list[0].weather[0].description;

    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0,3);

    days.forEach(day => {
      const p = document.createElement("p");
      p.textContent = `${new Date(day.dt_txt).toLocaleDateString()} — ${Math.round(day.main.temp)}°C`;
      forecastDiv.appendChild(p);
    });
  });


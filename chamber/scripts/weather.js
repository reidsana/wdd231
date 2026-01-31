const apiKey = "e34af50d981c43914f6e402d7b8fd862";
const lat = 17.9712;   // Kingston, Jamaica
const lon = -76.7936;

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);

    if (!response.ok) {
      throw new Error("Weather data not available");
    }

    const data = await response.json();

    // CURRENT WEATHER
    document.getElementById("temp").textContent =
      Math.round(data.list[0].main.temp);

    document.getElementById("desc").textContent =
      data.list[0].weather[0].description;

    // 3-DAY FORECAST (12:00 PM each day)
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    const forecastDays = data.list
      .filter(item => item.dt_txt.includes("12:00:00"))
      .slice(0, 3);

    forecastDays.forEach(day => {
      const forecastItem = document.createElement("p");
      forecastItem.textContent = `${new Date(day.dt_txt).toLocaleDateString()} — ${Math.round(day.main.temp)}°C`;
      forecastContainer.appendChild(forecastItem);
    });

  } catch (error) {
    console.error(error);
  }
}

getWeather();



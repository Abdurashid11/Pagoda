async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0662558b3a729b265808448ea45409a6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const date = new Date();
      const formattedDate = `${date.toLocaleDateString('en-US', {
        weekday: 'short',
      })}, ${date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
      })}`;

      document.getElementById('weatherData').innerHTML = `
        <img src="${iconUrl}" class="weather-icon" />
        <div class="temperature">${Math.round(data.main.temp)}°</div>
        <div class="location">${data.name}</div>
        <div class="min-max">Max: ${Math.round(data.main.temp_max)}° Min: ${Math.round(data.main.temp_min)}°</div>
        <div class="date">${formattedDate}</div>
      `;
    } else {
      document.getElementById('weatherData').innerHTML = `<p>City not found</p>`;
    }
  }

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeToggle.textContent =
    document.body.classList.contains("dark-mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
});

console.log("JavaScript connected");

// const cityInput = document.getElementById("cityInput");
// const weatherButton = document.getElementById("weatherButton");
// const weatherResult = document.getElementById("weatherResult");

// async function getWeather() {
//     const city = cityInput.value.trim();

//     if (!city) {
//         weatherResult.textContent = "Please enter a city.";
//         return;
//     }

//     weatherResult.textContent = "Loading weather...";

//     const apiKey = "8409c3b8439e34afb48a7476c83666a8";

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP ${response.status}`);
//         }

//         const data = await response.json();

//         weatherResult.innerHTML = `
//             <h3>${data.name}</h3>
//             <p>Temperature: ${data.main.temp}°C</p>
//             <p>Condition: ${data.weather[0].description}</p>
//         `;
//     } catch (error) {
//         weatherResult.textContent =
//             "Unable to fetch weather. Please try again.";

//         console.error(error);
//     }
// }

// weatherButton.addEventListener("click", getWeather);

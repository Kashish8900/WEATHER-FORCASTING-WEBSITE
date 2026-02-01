## WEATHER FORCASTING WEBSITE
A modern, responsive Weather Forecast Web Application developed using HTML, CSS, and JavaScript, integrated with WeatherAPI to deliver accurate real-time and forecasted weather data.The project focuses on clean UI/UX, smooth animations, and interactive data visualization.
## Project Overview
    1.This application allows users to search weather information for any city, state, or country.
    2.It displays current weather conditions, hourly weather trends, and a 7-day forecast, all within an elegant and user-friendly interface.
    3.The project is completely frontend-based and demonstrates practical usage of APIs, data handling, and modern web design techniques.
## Key Features
    1.Location-based weather search (City / State / Country)
    2. Real-time temperature and weather condition
    3. Humidity, wind speed, and precipitation data
    4. 7-day weather forecast
    5. Interactive hourly weather graphs:
## Temperature
## Precipitation
## Wind speed
    1. Animated sky background with moving clouds
    2. Glassmorphism-based search UI
    3. Fully responsive layout for all screen sizes
    4. Fast and lightweight (pure HTML, CSS & JS)
## User Interface Flow
## 1️⃣ Search Screen
    1.Full-screen sky gradient background
    2.Smooth cloud animation
    3.Centered glass-style search box
    4.User inputs location to continue
## 2️⃣ Weather Dashboard
    1.Current temperature with weather icon
    2.Location name and current day
    3.Weather details (humidity, wind, rain)
    4.Hourly data visualization using charts
    5.7-day forecast cards
## Technologies Used
## Technology	Purpose
    1.HTML	Page structure
    2.CSS	Styling, layout & animations
    3.JavaScript (ES6)	Logic & API handling .Chart.js	Weather data visualization
    4.WeatherAPI	Live weather data
## Project Structure
weather-forecast-app/
│
├── index.html        # Main HTML file
├── style.css         # Styling and animations
├── script1.js        # JavaScript logic and API integration
├── README.md         # Project documentation

## API Integration
    1.This project uses WeatherAPI to fetch live weather data.
    2.Setup Instructions:
    3.Create a free account on WeatherAPI
    4.Generate your API key
    5.Replace the API key in script1.js:
    6.const apiKey = "YOUR_API_KEY_HERE";
## Important:
    Do not expose your real API key in public repositories.
    For GitHub uploads, remove or mask the key.

## Hourly Weather Graph
Implemented using Chart.js
Smooth animated line graph
Toggle tabs for:
Temperature (°C)
Precipitation (mm)
Wind speed (km/h)
Dynamically updates based on searched location
## Purpose & Learning Outcomes
This project was built to strengthen skills in:
API fetching and error handling
JavaScript DOM manipulation
Data visualization
Responsive UI design
Real-world frontend project architecture

## Future Enhancements
🌙 Dark mode support
📍 Auto-detect user location
🌈 Weather-based dynamic background
📱 Progressive Web App (PWA)
🔐 Secure API handling using backend

## Acknowledgements
Weather data powered by WeatherAPI
Charts created using Chart.js
## License
This project is for educational and personal use.
You are free to modify and improve it.

import React, { useState } from "react";
import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import clearSkyDayIcon from "../Assets/clear_sky_day.png";
import clearSkyNightIcon from "../Assets/clear_sky_night.png";
import fewCloudsDayIcon from "../Assets/few_clouds_day.png";
import fewCloudsNightIcon from "../Assets/few_clouds_night.png";
import scatteredCloudIcon from "../Assets/scattered_clouds.png";
import brokenCloudIcon from "../Assets/broken_clouds.png";
import showerIcon from "../Assets/shower_rain.png";
import rainDayIcon from "../Assets/rain_day.png";
import rainNightIcon from "../Assets/rain_night.png";
import thunderIcon from "../Assets/thunderstorm.png";
import snowIcon from "../Assets/snow.png";
import mistIcon from "../Assets/mist.png";
import humidIcon from "../Assets/humidity.png";
import windIcon from "../Assets/wind.png";

let apiKey = process.env.REACT_APP_API_KEY;

const iconMappings = {
  "01d": clearSkyDayIcon,
  "01n": clearSkyNightIcon,
  "02d": fewCloudsDayIcon,
  "02n": fewCloudsNightIcon,
  "03d": scatteredCloudIcon,
  "03n": scatteredCloudIcon,
  "04d": brokenCloudIcon,
  "04n": brokenCloudIcon,
  "09d": showerIcon,
  "09n": showerIcon,
  "10d": rainDayIcon,
  "10n": rainNightIcon,
  "11d": thunderIcon,
  "11n": thunderIcon,
  "13d": snowIcon,
  "13n": snowIcon,
  "50d": mistIcon,
  "50n": mistIcon,
};

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({
    icon: scatteredCloudIcon,
    humidity: "25%",
    temp: "16°c",
    wind: "5km/h",
    location: "Vancouver",
  });

  const search = async () => {
    const cityInput = document.querySelector(".city").value.trim();
    if (!cityInput) {
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        icon: iconMappings[data.weather[0].icon] || scatteredCloudIcon,
        humidity: `${data.main.humidity}%`,
        temp: `${Math.floor(data.main.temp)}°c`,
        wind: `${data.wind.speed}km/h`,
        location: data.name,
      });

      document.querySelector(".city").value = "";
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      search();
    }
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city" placeholder="Search" onKeyDown={handleKeyDown} />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherData.icon} alt="Weather" />
      </div>
      <div className="weather-temp">{weatherData.temp}</div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidIcon} alt="Humidity" className="icon" />
          <div className="data">
            <div className="humidity-percentage">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="Wind Speed" className="icon" />
          <div className="data">
            <div className="wind-speed">{weatherData.wind}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

import React, { useState } from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import clearSkyDayIcon from '../Assets/clear_sky_day.png'
import clearSkyNightIcon from '../Assets/clear_sky_night.png'
import fewCloudsDayIcon from '../Assets/few_clouds_day.png'
import fewCloudsNightIcon from '../Assets/few_clouds_night.png'
import scatteredCloudIcon from '../Assets/scattered_clouds.png'
import brokenCloudIcon from '../Assets/broken_clouds.png'
import showerIcon from '../Assets/shower_rain.png'
import rainDayIcon from '../Assets/rain_day.png'
import rainNightIcon from '../Assets/rain_night.png'
import thunderIcon from '../Assets/thunderstorm.png'
import snowIcon from '../Assets/snow.png'
import mistIcon from '../Assets/mist.png'
import humidIcon from '../Assets/humidity.png'
import windIcon from '../Assets/wind.png'

let apiKey = process.env.REACT_APP_API_KEY;

export const WeatherApp = () => {

  const [icon, setIcon] = useState(scatteredCloudIcon);

  const search = async () => {
    const element = document.getElementsByClassName('city')
    if(!element[0].value) {
      return null;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    
    const humidity = document.getElementsByClassName('humidity-percentage');
    const wind = document.getElementsByClassName('wind-speed');
    const temp = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity + "%";
    temp[0].innerHTML = Math.floor(data.main.temp) + "°c";
    wind[0].innerHTML = data.wind.speed + "km/h";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === '01d') {
      setIcon(clearSkyDayIcon);
    }

    if(data.weather[0].icon === '01n') {
      setIcon(clearSkyNightIcon);
    }

    if(data.weather[0].icon === '02d') {
      setIcon(fewCloudsDayIcon);
    }

    if(data.weather[0].icon === '02n') {
      setIcon(fewCloudsNightIcon);
    }

    if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setIcon(scatteredCloudIcon);
    }

    if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
      setIcon(brokenCloudIcon);
    }

    if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
      setIcon(showerIcon);
    }

    if(data.weather[0].icon === '10d') {
      setIcon(rainDayIcon);
    }

    if(data.weather[0].icon === '10n') {
      setIcon(rainNightIcon);
    }

    if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
      setIcon(thunderIcon);
    }

    if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
      setIcon(snowIcon);
    }

    if(data.weather[0].icon === '50d' || data.weather[0].icon === '50n') {
      setIcon(mistIcon);
    }
  }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input 
          type='text'
          className='city' 
          placeholder='search'/>
        <div 
          className='search-icon'
          onClick={() => {
            search()
          }}>
          <img src={searchIcon} alt=''/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={icon} alt='' />
      </div>
      <div className="weather-temp">
        24°c
      </div>
      <div className="weather-location">
        London
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">
              64%
            </div>
            <div className="text">
              Humidity
            </div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">
              18 km/h
            </div>
            <div className="text">
              Wind Speed
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
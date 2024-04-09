import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import clearIcon from '../Assets/clear.png'
import cloudIcon from '../Assets/cloud.png'
import drizzleIcon from '../Assets/drizzle.png'
import humidIcon from '../Assets/humidity.png'
import rainIcon from '../Assets/rain.png'
import snowIcon from '../Assets/snow.png'
import windIcon from '../Assets/wind.png'
let apiKey = process.env.REACT_APP_API_KEY;

export const WeatherApp = () => {

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

    humidity[0].innerHTML = data.main.humidity;
    temp[0].innerHTML = data.main.temp;
    wind[0].innerHTML = data.wind.speed;
    location[0].innerHTML = data.name;
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
        <img src={cloudIcon} alt='' />
      </div>
      <div className="weather-temp">
        24c
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
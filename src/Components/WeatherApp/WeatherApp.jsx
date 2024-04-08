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

export const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input 
          type='text'
          className='city' 
          placeholder='search'/>
        <div className='search-icon'>
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
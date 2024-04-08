import React from 'react'
import './WeatherApp.css'
import searchIcon from '../Assets/search.png'
import clearIcon from '../Assets/clear.png'
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
    </div>
  )
}

export default WeatherApp
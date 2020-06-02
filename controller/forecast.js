const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();
const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${process.env.OPEN_WEATHER_API}&lang=pt&units=metric`
  axios.get(url)
  .then(({data} = {}) => {
    
    if (data.cod) {
      return callback('Localizacao Invalida', undefined)
    }

    callback(undefined, {
      // Current data
      temperature: data.current.temp,
      pressure: data.current.pressure,
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      description: data.current.weather[0].description,
      icon: data.current.weather[0].icon,
      // Daily data
      min_temp: data.daily[0].temp.min,
      max_temp: data.daily[0].temp.max,
      daily_description: data.daily[0].weather[0].description,
      daily_icon: data.daily[0].weather[0].icon
    })
    
  })
}

module.exports = forecast
const axios = require('axios')

// Controllers files
const geocoords = require('./geocoords')
const forecast = require('./forecast')

const weather = (req, res) => {
  const location = req.query.location
  if (!location) {
    return 'Provide a query'
  }

  geocoords(location, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return res.send({
        error
      })
    }

    forecast(latitude, longitude, (error, 
      {temperature, pressure, humidity, wind_speed,
        description, icon, min_temp, max_temp, daily_description, daily_icon} = {}) => {
          
          if (error) {
            return res.send({
              error
            })
          }
          res.send({
            temperature, 
            pressure, 
            humidity, 
            wind_speed,
            description,
            icon, 
            min_temp, 
            max_temp, 
            daily_description,
            daily_icon
          })
        })  
  })

}  

module.exports = weather
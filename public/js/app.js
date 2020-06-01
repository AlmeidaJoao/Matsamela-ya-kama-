const locationForm =  document.querySelector('form')
const locationText = document.querySelector('input')
const load = document.querySelector('#load')
const cards = document.querySelector('#cards')
// Current data
const temperature = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const wind_speed = document.querySelector('#wind-speed')
const c_description = document.querySelector('#current-description')
const pressure = document.querySelector('#pressure')
const c_icon = document.querySelector('#current-icon')

// Daily data
const min_temp = document.querySelector('#min-temp')
const max_temp = document.querySelector('#max-temp')
const d_description = document.querySelector('#daily-description')
const d_icon = document.querySelector('#daily-icon')

load.textContent = ''

locationForm.addEventListener('submit', (e) => {  

  const lc = locationText.value
  const url = `http://localhost:3000/weather?location=${lc}`
  e.preventDefault()
  
  load.textContent = 'Carregando...'
  
  fetch(url).then(response => {
    response.json().then((data) => {
      
      if (data.error) {
        return load.textContent = data.error   
      }
      load.textContent = data.location
  
      temperature.textContent = `Tempatura actual: ${data.temperature}°C`
      humidity.textContent = `Humidade: ${data.humidity}`
      wind_speed.textContent = `Velocidade do vento: ${data.wind_speed} m/s`
      c_description.textContent = data.description
      pressure.textContent = `Pressão atmosférica: ${data.pressure}`
      c_icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`

      min_temp.textContent = `Mínima: ${data.min_temp}°C`
      max_temp.textContent = `Máxima: ${data.max_temp}°C`
      d_description.textContent = data.daily_description
      d_icon.src = `http://openweathermap.org/img/wn/${data.daily_icon}@2x.png`

      cards.style.visibility ='visible'
    })
  })
})
  

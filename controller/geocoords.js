const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();
const coordinates = (location, callback) => {

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=-74.70850,40.78375&access_token=${process.env.MAP_BOX_API}` 
  axios.get(url).then(({data} = {}) => {
    
    if(data.features.length === 0 ) {
      return callback('Localizacao Invalida, tente novamente!', undefined)
    }

    const latitude = data.features[0].center[1]
    const longitude = data.features[0].center[0]
    const location = data.features[0].place_name
    callback(undefined, {
      latitude: latitude,
      longitude: longitude,
      location: location
    })
  }).catch((error) => {
    callback('Servicos de localizacao nao disponiveis', undefined)
  })
}

module.exports = coordinates
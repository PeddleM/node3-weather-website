const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=fd016abe5899f17233b40d165fff358d&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (error) {
            callback('Unable to find location', undefined)
        } else {

            const summary = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
                ' degrees out, feels like ' + body.current.feelslike + ' degrees with a wind speed of ' 
                + body.current.wind_speed + ' m/s.'

            callback(undefined, summary)
        }  
    })
}

module.exports = forecast
const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e3c0a01ebd2542e365c8493e9644514c&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Enable to connect to weather service!', undefined)
        }
        else if (body.error) {
            callback('Enable to find location!', undefined)
        }
        else {
            callback(undefined, {
                location: body.location.country,
                temperature: body.current.temperature,
                feelsLikeTemp: body.current.feelslike,
            })
        }
    })
}

module.exports = forecast


const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZGltb25hYXNkc2Fkc2FkIiwiYSI6ImNrd2lkZjVzMTE3MWUyb3F2ZjM4Nnl4dGoifQ.RytDB4Le2Y1Rt76ayOoMQA&limit=1"

    request({ url, json: true }, (error, { body }) => {
        const { features } = body
        if (error) {
            callback('Enable to connect to Geocode', undefined)
        }
        else if (features.length === 0) {
            callback('Enable to find location! Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name,
            })
        }
    })
}

module.exports = geocode
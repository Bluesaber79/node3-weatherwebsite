
const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/13a7b359e875ac144b0c413c2ebc910c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url,json: true},(error,{body}) => {
    if (error){
        callback('unable to connnect to weather service',undefined)
    }else if (body.error) {
        callback('Wrong location',undefined)
    }else{
        const temp = body.currently.temperature
        const rain = body.currently.precipIntensity
        callback(undefined,body.daily.data[0].summary +'It is currently '+ temp + '. There is ' + rain + ' chance of rain')
    } 
    
})
}

module.exports = forecast
require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;
   
exports.handler = (event, context, callback) => {
    let { cityKey } = JSON.parse(event.body);

    const getWeather = async (id) => {
        try {
            // get weather information
            const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
            const query = `${id}?apikey=${key}`
            
            const weatherResponse = await fetch(baseUrl + query);
            const weatherData = await weatherResponse.json();
            const weather = weatherData[0];

            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    weather
                })
            })

        } catch (err) {
            callback(err, {
                statusCode: 500,
                body: JSON.stringify({
                    msg: err.message
                })
            })
        }

    }

    if (event.httpMethod === "POST") {
        getWeather(cityKey)
    }

}

require('dotenv').config();
const key = process.env.REACT_APP_API_KEY;

exports.handler = (event, context, callback) => {
    const { city } = JSON.parse(event.body);

    const getCity = async (location) => {
        try {
            // get city information
            const cityBaseUrl ='https://dataservice.accuweather.com/locations/v1/cities/search';
            const cityQuery = `?apikey=${key}&q=${location}`;

            const cityResponse = await fetch(cityBaseUrl + cityQuery);
            const cityData = await cityResponse.json();
            const city = cityData[0];
            
            callback(null, {
                statusCode: 200, 
                body: JSON.stringify({
                    city
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
        getCity(city)
    }

}
const port = process.env.PORT || 8000;
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const { getCity, getWeather } = require('./utils/weather')

const app = express()
app.use(cors())

// // need body parser to parse form data into request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())






// get request that receives route parameter from front-end
app.get('/weather/:city', (req, res) => {
    const { city } = req.params;
    
    getCity(city)
    .then(data => getWeather(data.Key))
    .then((data) => res.send(data))
    .catch(err => console.log(err.message))
})






// post request that receives user input from front-end
app.post('/city', (req, res) => {
    const { city } = req.body;

    getCity(city)
    .then(data => {
        // initial request to api after promise is returned we check for data object if undefined throw custom error
        if (data === undefined) {
            throw new Error('Could not fetch data.')
        }
        res.send(data)
    })
    // which is caught here and send to front-end along with a status of 404 Not Found
    .catch(err => {
        return res.status(404).json({msg: err.message})
    })
})

app.listen(port, () => console.log(`server is running on port ${port}`))


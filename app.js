const PORT = 8000;
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
    // return the call to getWeather function directly here and pass in the Key property on the data object as the argument
    .then(data => getWeather(data.Key))
    .then((data) => res.send(data))
    .catch(err => console.log(err))
})

// post request that receives user input from front-end
app.post('/city', (req, res) => {
    const { city } = req.body;

    getCity(city)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))


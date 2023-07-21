const PORT = 8000;
const express = require('express')
const cors = require('cors')
const { getCity, getWeather } = require('./utils/weather')


const app = express()
app.use(cors())


app.get('/city', (req, res) => {

    getCity('Hong Kong')
    // return the call to getWeather function directly here and pass in the Key property on the data object as the argument
    .then(data => res.send(data))
    .catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))


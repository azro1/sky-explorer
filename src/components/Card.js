import './Card.css'

const Card = ({ userCity, cityWeather, errors }) => {
let city = userCity.city;
let weather = cityWeather.weather;

  return (
    <div className={`card ${city ? "open" : ""} ${errors ? "close" : ""}`}>
        <img src={weather.IsDayTime ? './img/day.jpg' : './img/night.jpg'} className="time" alt="" />
        <div className="icon">
            <img src={`./img/icons/${weather.WeatherIcon}.svg`} alt="icon" />
        </div>
        <div className={`details ${!weather.IsDayTime ? 'night-text' : ''}`}>
            <h2>{city.EnglishName}</h2>
            <div className="condition">{weather.WeatherText}</div>
            <div className="temp">
                <span>{weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        </div>
    </div>
  )
}

export default Card

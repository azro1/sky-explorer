import './Card.css'

const Card = ({ userCity, cityWeather, errors }) => {

  return (
    <div className={`card ${userCity ? "open" : ""} ${errors ? "close" : ""}`}>
        <img src={cityWeather.IsDayTime ? './img/day.jpg' : './img/night.jpg'} className="time" alt="" />
        <div className="icon">
            <img src={`./img/icons/${cityWeather.WeatherIcon}.svg`} alt="icon" />
        </div>
        <div className={`details ${!cityWeather.IsDayTime ? 'night-text' : ''}`}>
            <h2>{userCity.EnglishName}</h2>
            <div className="condition">{cityWeather.WeatherText}</div>
            <div className="temp">
                <span>{cityWeather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        </div>
    </div>
  )
}

export default Card

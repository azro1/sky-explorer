import './Card.css'

const Card = () => {
  return (
    <div className="card">
        <img src="https://placehold.co/250x150/png" className="time" alt="" />
        <div className="icon">
            {/* icon */}
        </div>
        <div className="details">
            <h4>City Name</h4>
            <div className="condition">Weather condition</div>
            <div className="temp">
                <span>temp</span>
                <span>&deg;C</span>
            </div>
        </div>
    </div>
  )
}

export default Card

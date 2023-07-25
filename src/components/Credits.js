import './Credits.css'

const Credits = ({ cityWeather }) => {
  return (
    <div className="credits">
      {cityWeather.IsDayTime ? <a href="https://www.freepik.com/free-vector/horizontal-sky-with-cloud-background_27885584.htm#page=2&query=cartoon%20clouds&position=5&from_view=search&track=ais">Image by brgfx on Freepik</a> : <a href="https://www.freepik.com/free-vector/flat-papercut-style-moon-stars-clouds-background_10016788.htm#page=2&query=half%20moon%20sky&position=12&from_view=search&track=ais">Image by starline on Freepik</a>}
    </div>
  )
}

export default Credits

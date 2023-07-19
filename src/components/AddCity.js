import './AddCity.css'

const AddCity = () => {
  return (
    <form autoComplete='off'>
        <label>Enter a city to get up-to-date weather information
            <input type="text" id="city" />
        </label>
    </form>
  )
}

export default AddCity

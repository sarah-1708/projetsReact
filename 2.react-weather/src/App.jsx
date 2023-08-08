import loader from "./assets/loader.svg"
import browser from "./assets/browser.svg"
import "./App.css"
import {useEffect, useState} from "react"
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const[weatherData, setWeatherData]=useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
    .then(response =>{
      
      if(!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`)
      return response.json();
    })
    .then(responseData => {
      setWeatherData({
        city: responseData.data.city,
        country: responseData.data.country,
        iconId: responseData.data.current.weather.ic,
        temperature: responseData.data.current.weather.tp,
        humidity:responseData.data.current.weather.hu,
        windspeed:responseData.data.current.weather.wd,
      })
    })
    .catch(err => {
      setErrorInfo(err.message)
    })
  },[])
 
  return (

      <main>
      <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
        <img src={loader} alt="loading icon" />
      </div>

      {weatherData && (
        <>
      <p className="city-name">{weatherData.city}</p>
      <p className="country-name">{weatherData.country}</p>
      <div className="temperature">{weatherData.temperature}°C</div>
      <div className="info-icon-container">
        <img src={`/icons/${weatherData.iconId}.svg`} className="info-icon" alt="weather icon" />
      </div>

      <div className="flex">
      <p>Humidité</p>
      <div className="humidity-wind">{weatherData.humidity}%</div>
      </div>
      <div className="flex">
      <p>Vent</p>
      <div className="humidity-wind">{weatherData.windspeed}m/s</div>
      </div>
      
      </>
      )}

      {(errorInfo && !weatherData) &&(
        <>
        <p className="error-information">{errorInfo}</p>
        <img src={browser} alt="error icon" />
        </>
      )}
      </main>
  
  );
}

export default App;

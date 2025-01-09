/* eslint-disable react/prop-types */
import "./WeatherInfo5Days.css"

function WeatherInfo5Days({weather5Days}) {

    let daylyForecast = {}

    for(let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!daylyForecast[date]) {
            daylyForecast[date] = forecast
        }
    }

    const next5Days = Object.values(daylyForecast).slice(0, 5)

    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'numeric' })
        return newDate
        
    }    

    return (
        <div className="weather-container">
            <h3>Previsão Próximos 5 dias</h3>
            <div className="weather-list">
                {next5Days.map(forecast => (
                    <div key={forecast.dt} className="weather-item">
                        <p>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInfo5Days;
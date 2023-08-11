//react component
import React, { useEffect, useState } from 'react'

//import style component
import * as S from './main.styles.js';

//react icon
import { FaGithub } from 'react-icons/fa';

export default function Main({ label }) {

    const [cityInput, setCityInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    console.log(forecastData)

    const [isCelsius, setIsCelsius] = useState(true);

    const token = '1162c2a6b41357a45fa8752bbab5b7d6'

    const dateBuilder = (e) => {
        let months = [
            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER",
        ];

        let days = [
            "SUNDAY",
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
        ];
        let day = days[e.getDay()];
        let date = e.getDate();

        let month = months[e.getMonth()];

        return `${day} ${date} ${month}`;
    };
    const search = async (el) => {
        if (el.key === "Enter") {
            try {
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${token}`);
                const weatherJson = await weatherResponse.json();
                setWeatherData(weatherJson);
                const lat = weatherJson.coord.lat;
                const lon = weatherJson.coord.lon;
                const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}`);
                const forecastJson = await forecastResponse.json();
                setForecastData(forecastJson);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }
    console.log(forecastData)

    const toggleUnit = () => {
        setIsCelsius(!isCelsius);
    };

    const convertTemperature = (temperature) => {
        if (isCelsius) {
            return Math.ceil(temperature - 273);
        } else {
            return Math.ceil((temperature - 273) * 9 / 5 + 32);
        }
    };

    return (
        <>
            <S.MainContainer>
                <p className='heading-cls'>Weather Forecast Details</p>
                <a href="https://github.com/Harshsanas/weather-forecast.git" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='github-icon' />
                </a>
                <input
                    className='input-field'
                    placeholder='Enter City Name'
                    onChange={(e) => setCityInput(e.target.value)}
                    type="text"
                    value={cityInput}
                    onKeyPress={search}
                />
                {typeof weatherData?.main != "undefined" ? (
                    <S.BodyContainer>
                        <div className='row'>
                            <div className='col-md-6 left-container'>
                                <p className='sub-heading'>Current Weather
                                    &nbsp; &nbsp; <button onClick={toggleUnit}>
                                        {isCelsius ? 'F' : 'C'}
                                    </button></p>
                                <div className='row'>
                                    <div className='col-md-4 sec-div'>
                                        <p className='sub-title'>{weatherData?.name}, {weatherData?.sys?.country}</p>
                                        {dateBuilder(new Date())}
                                    </div>
                                    <div className='col-md-4'>
                                        <p className='sub-title'>{convertTemperature(weatherData?.main?.temp)}°{isCelsius ? 'C' : 'F'}</p>
                                        {weatherData.weather[0].main}
                                    </div>
                                    <div className='col-md-4'>
                                        <p className='sub-title'>Humidity</p>
                                        {weatherData?.main?.humidity} &nbsp; %
                                    </div>
                                </div>
                                <p className='sub-heading'>Air Condition</p>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <p className='sub-title'>Min Temp</p>
                                        {((weatherData?.main?.temp_min) - 273.15).toFixed(2)}°C
                                    </div>
                                    <div className='col-md-3'>
                                        <p className='sub-title'>Max Temp</p>
                                        {((weatherData?.main?.temp_max) - 273.15).toFixed(2)}°C
                                    </div>
                                    <div className='col-md-3'>
                                        <p className='sub-title'>Wind</p>
                                        Speed : {weatherData?.wind?.speed} Km/h <br />
                                        Dir : {weatherData?.wind?.deg}
                                    </div>
                                    <div className='col-md-3'>
                                        <p className='sub-title'>Clouds</p>
                                        {weatherData?.clouds?.all}
                                    </div>
                                </div>

                                <p className='sub-heading'>Today's Forecast</p>
                                <div className='row'>
                                    <div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-5 right-container'>
                                <p className='sub-heading'>five Days ForeCast</p>
                                <div className='row'>
                                    {forecastData?.list?.dt_txt}
                                    <div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div>
                                    <div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div><div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div><div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div><div className='col-md-12 forecast-subDiv'>
                                        {dateBuilder(new Date())}<br />
                                        {Math.ceil(weatherData?.main?.temp) - 273}°C &nbsp;&nbsp;&nbsp;
                                        {weatherData.weather[0].main}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </S.BodyContainer>) : (<></>)}
            </S.MainContainer>
        </>
    )
}

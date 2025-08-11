import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import React, { useState } from 'react';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
        city:"Noida",
        feelsLike : 24,
        temp: 25,
        tempMin: 21,
        tempMax: 34,
        humidity: 47,
        weather: "haze"  
        }
    );

    let updateInfo = (newInfo) => {
       setWeatherInfo(newInfo); 
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Vatsal</h2>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}
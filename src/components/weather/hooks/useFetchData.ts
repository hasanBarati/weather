// import { useState } from 'react'
// import { WEATHER_API_KEY, WEATHER_API_URL } from '../../../api';

export function UseFetchData() {
    
    // const [currentWeather, setCurrentWeather] = useState(null);
    // const [forecast, setForecast] = useState(null);
  
    // const getData = (searchData) => {
    //   const [lat, lon] = searchData.value.split(" ");
  
    //   const currentWeatherFetch = fetch(
    //     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    //   );
    //   const forecastFetch = fetch(
    //     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    //   );
  
    //   Promise.all([currentWeatherFetch, forecastFetch])
    //     .then(async (response) => {
    //       const weatherResponse = await response[0].json();
    //       const forcastResponse = await response[1].json();
  
    //       setCurrentWeather({ city: searchData.label, ...weatherResponse });
    //       setForecast({ city: searchData.label, ...forcastResponse });
    //     })
    //     .catch(console.log);
    // };

    // return {getData,currentWeather,forecast}
}

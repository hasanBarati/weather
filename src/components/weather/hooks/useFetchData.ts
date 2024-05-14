// import { useState } from 'react'
// import { WEATHER_API_KEY, WEATHER_API_URL } from '../../../api';

import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../../api";
import { ApiStatus, ExtendedForecastData, LocationType, WeatherData } from "../../../types";

export function useFetchData() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData>();

  const [forecast, setForecast] = useState<ExtendedForecastData>();
  const [fetchData,setFetchData]=useState<ApiStatus>("IDLE")
  const [currentLocation, setCurrentLocation] = useState<LocationType>({
    lat: 35.771839,
    lon: 51.409461,
  });
    
  useEffect(() => {
    console.log(navigator, navigator.geolocation);
    navigator.geolocation.getCurrentPosition(function (position) {
      alert("internal error");

      setCurrentLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    alert(JSON.stringify(navigator));
    alert(navigator);

    setFetchData("PENDING")
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: "Tehran", ...weatherResponse });
        setForecast({ city: "Tehran", ...forcastResponse });
        setFetchData("SUCCESS")
      })
      .catch(()=>setFetchData("ERROR"))
  }, [currentLocation.lat,currentLocation.lon]);

    return {currentWeather,forecast,fetchData}
}

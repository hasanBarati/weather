
import { useEffect, useState } from "react";
import {
  ApiStatus,
  ExtendedForecastData,
  LocationType,
  WeatherData,
} from "../../../types";

export function useFetchData() {

  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  const WEATHER_API_KEY = "f8d3f6829af8bfb9f0d9da504c7dea32"; 
  const [currentWeather, setCurrentWeather] = useState<WeatherData>();
  const [forecast, setForecast] = useState<ExtendedForecastData>();
  const [fetchData, setFetchData] = useState<ApiStatus>("IDLE");
  const currentLocation:LocationType={
    lat: 35.771839,
    lon: 51.409461,
  }

  useEffect(() => {
    setFetchData("PENDING");
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
        setFetchData("SUCCESS");
      })
      .catch(() => setFetchData("ERROR"));
  }, []);

  return { currentWeather, forecast, fetchData };
}

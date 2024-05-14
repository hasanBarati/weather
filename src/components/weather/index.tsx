import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api";

import CurrentWeather from "./current-weather";
import Forecast from "./forecast";
import { ExtendedForecastData, LocationType, WeatherData } from "../../types";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData>();
  const [forecast, setForecast] = useState<ExtendedForecastData>();
  const [currentLocation, setCurrentLocation] = useState<LocationType>({
    lat: 32.4279,
    lon: 53.688,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      alert(JSON.stringify(position))
      setCurrentLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    alert(JSON.stringify(currentLocation))
    console.log("lat after =change",currentLocation.lat)
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?q=${"Tehran"}&lat=${
        currentLocation.lat
      }&lon=${currentLocation.lon}&appid=${WEATHER_API_KEY}&units=metric`
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
      })
      .catch(console.log);
  }, []);

  return (
    <div className="[&>*]:text-white p-5 flex flex-col items-center justify-center mx-auto bg-gradient-to-t from-[#08244f] via-[#134cb5] to-[#0b42ab] ">
      {/* <Search onSearchChange={handleOnSearchChange} /> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default Weather;

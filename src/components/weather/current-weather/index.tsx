import { WeatherData } from "../../../types";

const CurrentWeather = ({ data }: { data: WeatherData }) => {
  return (
    <div className="flex flex-col items-center min-w-96 p-5">
      <div className="flex flex-end w-full gap-1">
        <img alt="location" src={`icons/location.svg`} />
        <p className="text-2xl font-bold text-left">{data.city}</p>
      </div>

      <img
        alt="weather"
        className="weather-icon"
        src={`icons/${data.weather[0].icon}.png`}
        width="100"
      />
      <p className="weather-description">{data.weather[0].description}</p>
      <div className=" flex flex-col justify-center items-center gap-y-2 w-full">
        <p className="text text-4xl font-bold">
          {Math.round(data.main.temp)}°C
        </p>
        <p>Precipitations</p>
        <div className="flex gap-2">
          <p>Max:{data.main.temp_max}</p>
          <p>Min:{data.main.temp_min}</p>
        </div>
        <div className=" rounded-2xl bg-[#001026] flex justify-between w-full p-2">
          <div className="flex gap-1">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/humidity.svg`}
            />
            <p>{data.main.humidity}%</p>{" "}
          </div>
          <div className="flex gap-1">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/pressure.svg`}
            />
            <p>{data.main.pressure}hPa</p>{" "}
          </div>
          <div className="flex gap-1">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/wind.svg`}
            />
            <p>{data.wind.speed}m/s</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

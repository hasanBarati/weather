import { WEEK_DAYS } from "../../../constants";
import { ExtendedForecastData } from "../../../types";

const Forecast = ({ data }: { data: ExtendedForecastData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="flex gap-2 flex-wrap justify-center [&>*]:text-sm">
      {data.list.splice(0, 7).map((item, idx) => (
        <div
          className="rounded-2xl bg-[#2a4f83] flex flex-col items-center  basis-48   p-2"
          key={idx}
        >
          <img
            src={`icons/${item.weather[0].icon}.png`}
            className="icon-small"
            alt="weather"
            width="50"
          />
          <label className="day">{forecastDays[idx]}</label>
          <label className="description">{item.weather[0].description}</label>
          <label className="min-max">
            {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}
            °C
          </label>
          <p>Pressure:{item.main.pressure}</p>
          <p>Humidity:{item.main.humidity}</p>
          <p>Clouds:{item.clouds.all}%</p>
          <p>Wind speed:{item.wind.speed} m/s</p>
          <p>Sea level:{item.main.sea_level}m</p>
          <p>Feels like:{item.main.feels_like}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

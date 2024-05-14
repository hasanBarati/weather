import { Days, ExtendedForecastData } from "../../../types";

const WEEK_DAYS: Days[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }: { data: ExtendedForecastData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="flex gap-2 flex-wrap justify-center [&>*]:text-sm">
      {data.list.splice(0, 7).map((item, idx) => (
        <div
          className="rounded-2xl bg-[#001026] flex flex-col items-center  basis-48   p-2"
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

          <div>
            <label>Pressure:</label>
            <label>{item.main.pressure}</label>
          </div>
          <div>
            <label>Humidity:</label>
            <label>{item.main.humidity}</label>
          </div>
          <div>
            <label>Clouds:</label>
            <label>{item.clouds.all}%</label>
          </div>
          <div>
            <label>Wind speed:</label>
            <label>{item.wind.speed} m/s</label>
          </div>
          <div>
            <label>Sea level:</label>
            <label>{item.main.sea_level}m</label>
          </div>
          <div>
            <label>Feels like:</label>
            <label>{item.main.feels_like}°C</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

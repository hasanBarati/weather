import Loading from "../common/loading";
import CurrentWeather from "./current-weather";
import Forecast from "./forecast";
import { useFetchData } from "./hooks/useFetchData";

function Weather() {
  const { currentWeather, forecast, fetchData } = useFetchData();

  if (fetchData === "ERROR") {
    return (
      <div className="flex justify-center items-center h-dvh">
        <p className="text-red-500 text-4xl font-bold">خطایی رخ داده است</p>
      </div>
    );
  }

  return fetchData === "PENDING" ? (
    <Loading />
  ) : (
    <div className="bgColor ">
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default Weather;

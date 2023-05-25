import React from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import ExtraWeatherInfo from "./ExtraWeatherInfo";

function Main(props) {
  const { weatherData } = props;
  return (
    <main style={{ display: "flex" }}>
      <MainWeatherInfo weatherData={weatherData} />
      <ExtraWeatherInfo weatherData={weatherData} />
    </main>
  );
}
export default Main;

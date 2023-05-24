import React, { useEffect, useState } from "react";

const WeatherInfo = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apikey = "200edd7785484cddbd61e47c958d679c";

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}`
        );

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getWeatherData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather Information</h2>
          {weatherData.data && weatherData.data.length > 0 ? (
            <div>
              <p>City: {weatherData.data[0].city_name}</p>
              <p>Temperature: {weatherData.data[0].temp}</p>
              <p>Humidity: {weatherData.data[0].rh}</p>
              <p>Wind Speed: {weatherData.data[0].wind_spd}</p>
              <p>Wind Direction: {weatherData.data[0].wind_cdir_full}</p>
              <p>Pressure: {weatherData.data[0].pres}</p>
              <p>Cloud Cover: {weatherData.data[0].clouds}</p>
              <p>UV index: {weatherData.data[0].uv}</p>
              <p>AQI: {weatherData.data[0].aqi}</p>
              <p>Weather Description: {weatherData.data[0].weather.description}</p>
            </div>
          ) : (
            <p>Please Enter City name or zip code</p>
          )}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherInfo;

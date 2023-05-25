import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App(){
  const [weatherData, setWeatherData] = useState(null);
  const [city,setCity] = useState("delhi");
  const apikey = "200edd7785484cddbd61e47c958d679c";

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apikey}`
        );

        const data = await response.json();
        console.log(data.data)
        setWeatherData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getWeatherData();
  }, [city]);

const cityname = (e) => {
setCity(e)
}

    return <>
      <Header cityname={cityname}/>
      <Main weatherData={weatherData}
      />
      {/* <Footer /> */}
    </>
}

export default App;
import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { BorderAllRounded } from "@mui/icons-material";

function Main(props){
    const {weatherData} = props
    const currentDate = new Date().toDateString().substring(4,10);
    const currentDay = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDay];
    const currentHours = new Date().getHours(); 
    const currentMinutes = new Date().getMinutes(); 

    return <div
      style={{
        display: 'flex',
        height: '85vh',
      }}
    >
      <div
        style={{
          width: '60%',
          height: '45%',
          backgroundColor: 'white',
          margin:'50px',
          borderRadius: '30px'
        }}
      >
      
        <Typography fontFamily={'Rajdhani'} padding={'2% 0 0 2%'} variant="h2" display= {'flex'} alignItems= {'center'} >
         {currentDayName}
        </Typography>

        <Typography fontFamily={'Rajdhani'} paddingLeft={'2%'} variant="h4" display= {'flex'} alignItems= {'center'} >
        {currentDate}
        </Typography>

        {/* <Typography fontFamily={'Patrick Hand'} variant="h3" display= {'flex'} alignItems= {'center'}>
         {currentHours}:{currentMinutes}
        </Typography> */}

        <Typography fontFamily={'Rajdhani'} padding={'6% 0 0 2%'} variant="h1" display= {'flex'}  >
        {weatherData && weatherData.data[0].temp}&deg;C
        </Typography>
        
        
{/*         
        <Typography fontFamily={'Patrick Hand'} variant="h2" display= {'flex'} justifyContent={'center'}  >
       {weatherData && weatherData.data[0].city_name},{weatherData && weatherData.data[0].country_code}
        </Typography>
       */}
        
        
        {/* {weatherData && weatherData.data[0].temp}  */}
      </div>
    </div>
              {/* <h1> {weatherData && weatherData.data[0].temp} </h1> */}
             {/* <p>City: {weatherData.data[0].city_name}</p>
              <p>Temperature: {weatherData.data[0].temp}</p>
              <p>Humidity: {weatherData.data[0].rh}</p>
              <p>Wind Speed: {weatherData.data[0].wind_spd}</p>
              <p>Wind Direction: {weatherData.data[0].wind_cdir_full}</p>
              <p>Pressure: {weatherData.data[0].pres}</p>
              <p>Cloud Cover: {weatherData.data[0].clouds}</p>
              <p>UV index: {weatherData.data[0].uv}</p>
              <p>AQI: {weatherData.data[0].aqi}</p>
              <p>Weather Description: {weatherData.data[0].weather.description}</p> */}

}
export default Main;
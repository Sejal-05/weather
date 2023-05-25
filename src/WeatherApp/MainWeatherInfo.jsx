import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { BorderAllRounded, Padding } from "@mui/icons-material";
import sunny from "../Assets/sunny-day.png";
import bright from "../Assets/bright.png";
import mostlyCloud from "../Assets/meteorology.png";

const StyledDiv = styled.div`
  
          height: 45%;
          background-color: #ffffff4f;
          margin: 50px;
          border-radius: 30px;
          padding: 1rem 2rem;
          
`;


function MainWeatherInfo(props){
    const {weatherData} = props
    const currentDate = new Date().toDateString().substring(4,10);
    const currentDay = new Date().getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDay];
    const currentHours = new Date().getHours(); 
    const currentMinutes = new Date().getMinutes(); 

    const cloudInfo=weatherData && weatherData.data[0].clouds;
    let weatherDescription = '';
    let weatherImage;

    if (cloudInfo < 30) {
      weatherDescription = 'Sunny';
      weatherImage= sunny
    } else if (cloudInfo < 70) {
      weatherDescription = 'Partly cloudy';
      weatherImage= bright;
    } else {
      weatherDescription = 'Mostly Cloudy';
      weatherImage= mostlyCloud;
    }
    return <div
      style={{
        height: '85vh',
        width: "70%"
      }}
    >
      <StyledDiv>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <Typography fontFamily={'Rajdhani'}  variant="h2" display= {'flex'} alignItems= {'center'} >
         {currentDayName}
        </Typography>

        <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} alignItems= {'center'} >
        {currentDate}
        </Typography>
      </div>
      <div>
        <img style={{ width:'10rem',marginRight:'3rem',marginTop:'.5rem'}} src={weatherImage} alt="weather.png" />
      </div>
      </div>


    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div> 
      <Typography fontFamily={'Rajdhani'} marginTop={'2rem'} variant="h1" display= {'flex'}  >
        {weatherData && weatherData.data[0].temp}&deg;C
        </Typography>
        
        <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'}  >
         {weatherDescription}
        </Typography>
      </div>

      <div>   
      <Typography fontFamily={'Rajdhani'} marginTop={'3rem'} variant="h2" display= {'flex'} >
         {currentHours}:{currentMinutes}
        </Typography>

        <Typography fontFamily={'Rajdhani'} variant="h2" display= {'flex'}  >
       {weatherData && weatherData.data[0].city_name},{weatherData && weatherData.data[0].country_code}
        </Typography>
       
      </div>
    </div>  
        
        
        
      </StyledDiv>
    </div>

}
export default MainWeatherInfo;
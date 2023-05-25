import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";
import { BorderAllRounded, Padding } from "@mui/icons-material";


const StyledDiv = styled.div`
          width: 40%;
          background-color: #ffffff4f;
          margin: 50px;
          border-radius: 30px;
          padding: 1rem 2rem;     
          justify-content: space-between;
          height: 630px;
`;



const SmallDiv =styled.div`
     background-color: #ffffff4f;;
     margin: 10px;
     padding: 1rem;
    font-family:'Rajdhani';
    border-radius:30px;
`;

function ExtraWeatherInfo(props){
    const {weatherData} = props
    const aqi=weatherData && weatherData.data[0].aqi;
    let AQIdescription="";
   
    if ( aqi< 50) {
        AQIdescription='Good'
    } else if (aqi < 150) {
        AQIdescription='Moderately Polluted'
    } else {
        AQIdescription='Highly Polluted'
    }

    return(
    <StyledDiv>
<Box><SmallDiv>
     <Typography  fontFamily={'Rajdhani'}  variant="h4" display= {'flex'}  >
     {weatherData && weatherData.data[0].aqi} 
     </Typography>
     <Typography  fontFamily={'Rajdhani'}  variant="h6" display= {'flex'} >
      {AQIdescription}
     </Typography>
     <Typography  fontFamily={'Rajdhani'} variant="h4" display= {'flex'} >
     Air Quality
     
     </Typography>
  </SmallDiv></Box>
  <Box display="flex" justifyContent={'space-between'}>
<Box height='100%' width="50%" marginTop={'1rem'}>
  <SmallDiv>
     <Typography  fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} >
     {weatherData && weatherData.data[0].aqi} 
     </Typography>
     <Typography  fontFamily={'Rajdhani'}  variant="h6" display= {'flex'}  >
      {AQIdescription}
     </Typography>
     <Typography  fontFamily={'Rajdhani'} variant="h4" display= {'flex'} >
     Air Quality
     
     </Typography>
  </SmallDiv>

  <SmallDiv>
     <Typography  fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} >
     {weatherData && weatherData.data[0].rh}
     </Typography>
     <Typography  fontFamily={'Rajdhani'} variant="h4" display= {'flex'} >
     Humidity
       
     </Typography>
  </SmallDiv>

  <SmallDiv>
  <Typography  fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} >
  {weatherData && weatherData.data[0].uv}
     </Typography>

     <Typography  fontFamily={'Rajdhani'}  variant="h4" display= {'flex'}>
     UV Index
     </Typography>
    
  </SmallDiv>


  </Box>

  <Box height='100%' width="50%" marginTop={'1rem'}>
  <SmallDiv>
    <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} >
    {weatherData && weatherData.data[0].pres}
    </Typography>
    <Typography fontFamily={'Rajdhani'}   variant="h4" display= {'flex'} >
    Pressure
    
    </Typography>
    
  </SmallDiv>
  <SmallDiv>
  <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'}>
  {weatherData && weatherData.data[0].vis} 
  </Typography>
  <Typography fontFamily={'Rajdhani'} variant="h4" display= {'flex'} >
  Visibility
  
  </Typography>
    
  </SmallDiv>
  <SmallDiv>
  <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'}>
  {weatherData && weatherData.data[0].sunrise}
  </Typography>
  <Typography fontFamily={'Rajdhani'}  variant="h5" display= {'flex'} >
  Sunrise
 
  </Typography>
    
  <Typography fontFamily={'Rajdhani'}  variant="h4" display= {'flex'} >
  {weatherData && weatherData.data[0].sunset} 
  </Typography>
  <Typography fontFamily={'Rajdhani'} variant="h5" display= {'flex'} >
  Sunset
 
  </Typography>
    
  </SmallDiv>
</Box>
    </Box>
        
    </StyledDiv>)


}

export default ExtraWeatherInfo;
import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import sunny from "../Assets/sunny-day.png";
import bright from "../Assets/bright.png";
import mostlyCloud from "../Assets/meteorology.png";
import Skeleton from '@mui/material/Skeleton';

const StyledDivMain = styled.div`
  height: 45%;
  background-color: #ffffff4f;
  margin: 50px;
  border-radius: 30px;
  padding: 1rem 2rem;
`;

const StyledDiv = styled.div`
  display:flex;
  justify-content:space-between;
`;

const StyledTypography = styled(Typography)`
  font-family: "Rajdhani";
  display: flex;
`;


function MainWeatherInfo(props) {
  const { weatherData } = props;
  const date = new Date();
  const currentDate = date.toDateString().substring(4, 10);
  const currentDay = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayName = daysOfWeek[currentDay];
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const cloudInfo = weatherData && weatherData.data[0].clouds;
  let weatherDescription = "";
  let weatherImage;

  if (cloudInfo < 30) {
    weatherDescription = "Sunny";
    weatherImage = sunny;
  } else if (cloudInfo < 70) {
    weatherDescription = "Partly cloudy";
    weatherImage = bright;
  } else {
    weatherDescription = "Mostly Cloudy";
    weatherImage = mostlyCloud;
  }

  return (
    <div
      style={{
        height: "85vh",
        width: "70%",
      }}
    >
      <StyledDivMain>
        <StyledDiv>
          <div>
            <StyledTypography variant="h2">{currentDayName}</StyledTypography>
            <StyledTypography variant="h4">{currentDate}</StyledTypography>
          </div>
          <div>
            <img
              style={{
                width: "10rem",
                marginRight: "3rem",
                marginTop: ".5rem",
              }}
              src={weatherImage}
              alt="weather.png"
            />
          </div>
        </StyledDiv>

        <StyledDiv>
          <div>
          {!weatherData ? (
        <Skeleton variant={'text'} width={'200px'}/>
      ) : (
        <StyledTypography marginTop="2rem" variant="h1">
          {weatherData && weatherData.data[0].temp}&deg;C
        </StyledTypography>
      )}

      {!weatherData ? (
        <Skeleton variant={'text'} width={'200px'} />
      ) : (
        <StyledTypography variant="h4">
              {weatherDescription}
         </StyledTypography>
      )}

           
          </div>

          <div>
            <StyledTypography marginTop={"3rem"} variant="h2">
              {currentHours}:{currentMinutes}
            </StyledTypography>

            <StyledTypography variant="h2">
              {weatherData && weatherData.data[0].city_name},
              {weatherData && weatherData.data[0].country_code}
            </StyledTypography>
          </div>
        </StyledDiv>
      </StyledDivMain>
    </div>
  );
}
export default MainWeatherInfo;

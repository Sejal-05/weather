import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 40%;
  background-color: #ffffff4f;
  margin: 50px;
  border-radius: 30px;
  padding: 1rem 2rem;
  justify-content: space-between;
  height: 630px;
`;

const SmallDiv = styled.div`
  background-color: #ffffff4f;
  margin: 10px;
  padding: 1rem;
  font-family: "Rajdhani";
  border-radius: 30px;
`;

const StyledTypography = styled(Typography)`
  font-family: "Rajdhani";
  display: flex;
`;

function ExtraWeatherInfo(props) {
  const { weatherData } = props;
  const aqi = weatherData && weatherData.data[0].aqi;
  let AQIdescription = "";

  if (aqi < 50) {
    AQIdescription = "Good";
  } else if (aqi < 150) {
    AQIdescription = "Moderately Polluted";
  } else {
    AQIdescription = "Highly Polluted";
  }

  return (
    <StyledDiv>
      <Box>
        <SmallDiv>
          <StyledTypography variant="h4">
            {weatherData && weatherData.data[0].aqi}
          </StyledTypography>
          <StyledTypography variant="h6">{AQIdescription}</StyledTypography>
          <StyledTypography variant="h4">Air Quality</StyledTypography>
        </SmallDiv>
      </Box>

      <Box display="flex" justifyContent={"space-between"}>
        <Box height="100%" width="50%" marginTop={"1rem"}>
          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].wind_spd}
            </StyledTypography>
            <StyledTypography variant="h4">Wind Speed</StyledTypography>
          </SmallDiv>

          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].rh}
            </StyledTypography>
            <StyledTypography variant="h4">Humidity</StyledTypography>
          </SmallDiv>

          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].uv}
            </StyledTypography>

            <StyledTypography variant="h4">UV Index</StyledTypography>
          </SmallDiv>
        </Box>

        <Box height="100%" width="50%" marginTop={"1rem"}>
          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].pres}
            </StyledTypography>
            <StyledTypography variant="h4">Pressure</StyledTypography>
          </SmallDiv>
          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].vis}
            </StyledTypography>
            <StyledTypography variant="h4">Visibility</StyledTypography>
          </SmallDiv>
          <SmallDiv>
            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].sunrise}
            </StyledTypography>
            <StyledTypography variant="h5">Sunrise</StyledTypography>

            <StyledTypography variant="h4">
              {weatherData && weatherData.data[0].sunset}
            </StyledTypography>
            <StyledTypography variant="h5">Sunset</StyledTypography>
          </SmallDiv>
        </Box>
      </Box>
    </StyledDiv>
  );
}

export default ExtraWeatherInfo;

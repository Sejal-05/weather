import { Typography } from "@mui/material";
import React, { Component } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";

const Header1 = styled.header`
  background-color:#CDDAFD;
  display: flex;
  justify-content: space-between;
  Height:100px;
  padding-left:30px;
  
`;

function Header(props){
    const {cityname} = props
    const clickHandler = (city) => {
        cityname(city)
    }

    return (
        <Header1>
          <Typography fontFamily={'Patrick Hand'} variant="h3" display= {'flex'} alignItems= {'center'}>
            WeatherApp
        </Typography>
        <DropDown clickHandler={clickHandler}/>
        </Header1>
      );
}

export default Header;
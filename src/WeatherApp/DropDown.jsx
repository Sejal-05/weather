import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Cities from "./Cities";
import styled from "styled-components";

const Dropdown = styled.div`
  
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right:30px;

`;

export default function DropDown(props) {
const {clickHandler} = props;
const changeHandler = (gg) => {
    clickHandler(gg)
}
  return (
    <Dropdown>
      <Autocomplete
      onChange={(event,selectedValue) => changeHandler(selectedValue)}
      freeSolo
      fullWidth={true}
        disablePortal
        autoComplete={true}
        autoHighlight={true}
        id="select-city-dropdown"
        options={Cities}
        renderInput={(params) => <TextField {...params} fontFamily={'Patrick Hand'} label="Search city" />}
      />
    </Dropdown>
  );
}

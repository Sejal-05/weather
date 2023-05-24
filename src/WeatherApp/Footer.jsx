import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
      <footer>
        <p> ⓒ Created By Karuna Mathur  {year}</p>
      </footer>
    );
}
export default Footer;
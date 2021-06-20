import React from "react";

const currentYear = new Date().getFullYear();

function Footer(){
  return <footer><p>Copyright ⓒ Esther Tan, {currentYear}</p></footer>
}

export default Footer;

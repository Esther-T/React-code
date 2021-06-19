import React from "react"

const customStyle = {color: "red"}
const hour = new Date().getHours();
var greeting = "Good Morning";
if (hour >= 12 & hour < 18)
{
  greeting = "Good Afternoon";
  customStyle.color = "blue";
}
else if (hour >= 18 | hour < 24)
{
  greeting = "Good Night";
  customStyle.color = "yellow";
}

function Heading(){
  return(<h1 style={customStyle}>{greeting}</h1>);
}

export default Heading;

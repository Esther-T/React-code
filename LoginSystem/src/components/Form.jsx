import React, { useState } from "react";


function Form(props) {
  const [isMousedOver, setMouseOver] = useState(false);
  const [headingText, setHeadingText] = useState("Click on the Login button");
  function handleMouseOver(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  function handleLoginClick(){
    setHeadingText("Clicked!");
  }

  return (
    <form className="form">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.registered && <input type="password" placeholder="Confirm Password" />}
      <button
      type="button"
      style={{backgroundColor: isMousedOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleLoginClick}>
      {props.registered ? "Login" : "Registered"}</button>
    </form>
  );
}

export default Form;

import React, { useState } from "react";


function Form(props) {
  const [isMousedOver, setMouseOver] = useState(false);
  const [headingText, setHeadingText] = useState("Hello");
  const [username, setUsername] = useState("");

  function handleMouseOver(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  function handleClick(event){
    console.log(username);
    setHeadingText("Welcome " + username);
    event.preventDefault();
  }

  function handleChange(event){
    setUsername(event.target.value);
  }

  return (
    <form className="form" onSubmit={handleClick}>
      <h1>{headingText}</h1>
      <input type="text"
      name="Username"
      placeholder="Username"
      onChange={handleChange}
      value={username}/>
      <input type="password" placeholder="Password" />
      {!props.registered && <input type="password" placeholder="Confirm Password" />}
      <button
      type="submit"
      style={{backgroundColor: isMousedOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {props.registered ? "Login" : "Registered"}</button>
    </form>
  );
}

export default Form;

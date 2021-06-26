import React, { useState } from "react";


function Form(props) {
  const [isMousedOver, setMouseOver] = useState(false);
  const [headingText, setHeadingText] = useState("Hello");
  const [user, setUser] = useState({
    fName : "",
    lName : "",
    email : ""
  });


  function handleMouseOver(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  function handleClick(event){
    //console.log(fName);
    //setHeadingText("Welcome " + fName + " " + lName);
    event.preventDefault();
  }

  function handleChange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;

    setUser(prevValue => {
      return {
        ...prevValue,
        [inputName]: newValue
      }
    });
  }

  return (
    <form className="form" onSubmit={handleClick}>
      <h1>Hello {user.fName} {user.lName}</h1>
      <p>{user.email}</p>
      <input type="text"
      name="fName"
      placeholder="First Name"
      onChange={handleChange}
      value={user.fName}
      />
      <input type="text"
      name="lName"
      placeholder="Last Name"
      value={user.lName}
      onChange={handleChange}
      />
      <input type="text"
      name="email"
      placeholder="Email"
      value={user.email}
      onChange={handleChange}/>

      <button
      type="submit"
      style={{backgroundColor: isMousedOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      Submit</button>
    </form>
  );
}

export default Form;

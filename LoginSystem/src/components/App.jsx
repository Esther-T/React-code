import React from "react";
import Login from "./Login.jsx";
import Form from "./Form.jsx";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered &&  <Form registered={userIsRegistered}/>}
    </div>
  );
}

export default App;

/*
var isLoggedIn = true;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
    {//isLoggedIn ? <h1>Hello</h1> : <Login />
      //currentTime > 12 ? <h1>Why are you still working?</h1>: null
    currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
*/

import React, {useState} from "react";

function Time() {
  setInterval(setCurrTime, 1000);

  const now = new Date().toLocaleTimeString();
  console.log(now)
  const [currentTime, setTime] = useState(now);

  function setCurrTime(){
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={setCurrTime}>Get Time</button>
    </div>
  );
}

export default Time;

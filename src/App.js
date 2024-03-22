import React, { useState } from "react";
import "./App.css";
import Image from "../src/asserts/wizaart-img.56787174.gif";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const myFunction = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
   
  };
  const changePosition = () => {
    let child = document.getElementById("child_div");
    child.style.top = position.y + "px";
    child.style.left = position.x + "px";
  };
  return (
    <div>
      <div
        id="main_div"
        onMouseMove={myFunction}
        onClick={changePosition}
      >
        <img
          id="child_div"
          src={Image}
        />
      </div>
    </div>
  );
};

export default App;

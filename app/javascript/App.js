import React from "react";
import Greetings from "./component/greetings";

const App = () => {
  return <>
    <h1>React + Rails</h1>

    <h2>This is my greetings to you and the world</h2>

    <div style= {{border: "1px solid black", padding: "10px", color: "red"}}>
      <Greetings/>
    </div>
  </>
}

export default App;
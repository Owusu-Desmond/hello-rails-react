import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greetings from "./component/greetings";

const App = () => {
  return <>
    <h1>Hello World!</h1>
    <h2>React + Rails</h2>
    <Link to="/greeting">Go to greeting page</Link>
    <Routes>
      <Route path="/greeting" element={<Greetings/>}/>
    </Routes>
  </>
}

export default App;
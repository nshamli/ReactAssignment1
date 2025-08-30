import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterFunctional from "./Components/CounterFunctional";
import CounterClass from "./Components/CounterClass";

function App() {
  return (
    <div className="counter-row">
      <CounterFunctional />
      <CounterClass />
    </div>
  );
}

export default App;

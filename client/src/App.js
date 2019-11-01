import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FetchList from "./components/FetchList";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [toggleDarkMode, applyCSS, saveSetting] = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode();
    applyCSS();
    //saveSetting();
  };
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button onClick={handleDarkMode}>Dark Mode On/Off</button>
      <FetchList />
    </div>
  );
}

export default App;

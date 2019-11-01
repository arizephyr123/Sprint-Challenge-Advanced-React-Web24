import React from 'react';
import logo from './logo.svg';
import './App.css';

import FetchList from './components/FetchList'

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <FetchList/>
    </div>
  );
}

export default App;

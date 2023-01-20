import './App.css';
import React, { useState, useEffect } from "react";

import LoginPanel from "./LoginPanel/LoginPanel";
import ChartPanel from "./ChartPanel/ChartPanel";
import Counter from "./Components/Counter/Counter"; 

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInName, setIsLoggedInName] = useState("Dawid Pietraszko");

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[Counter(10) === 10]);

// API -------------------------------------------------------------------------- //
  const getData = () => {
    const url = "http://978-tech-pcpw/asix/v1/variable/archive/processed?name=JO976KGW_OPC_PALACZ_EnergiaK3&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        setData(json);
    })
  }
//------------------------------------------------------------------------------- //
  return (
    <div className="App">
        {isLoggedIn ? (
        (typeof data.samples !== 'undefined') ? (<ChartPanel dataChart={data.samples} setIsLoggedIn={setIsLoggedIn} setIsLoggedInName={isLoggedInName}/>) : (<></>)
      ) : (
        <LoginPanel
          text="Log in to see charts"
          setIsLoggedIn={setIsLoggedIn}
          setIsLoggedInName={setIsLoggedInName}
        />
      )}
    </div>
  );
}

export default App;

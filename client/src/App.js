import './App.css';
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import RegistrationPanel from "./RegistrationPanel/RegistrationPanel";
import ChartPanel from "./ChartPanel/ChartPanel";
import Counter from "./Components/Counter/Counter";
import LoginPanel from "./LoginPanel/LoginPanel";

function App() {

  const [loginStatus, setLoginStatus] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showRegistrationPanel, setShowRegistrationPanel] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[Counter(10) === 10 && isLoggedIn === true]);

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
        (typeof data.samples !== 'undefined') ? 
        (<ChartPanel dataChart={data.samples} setIsLoggedIn={setIsLoggedIn} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>) :
        (<></>)
      ) : (
        showRegistrationPanel ? (
          <>
            <RegistrationPanel title="Registration Panel"/>
            <ButtonPanel onClick={(e) => {
            showRegistrationPanel ? setShowRegistrationPanel(false) : (setShowRegistrationPanel(true))
          }}>{"Login Panel"}</ButtonPanel>
          </>
        ) : (
          <>
            <LoginPanel title="Login Panel" loginStatus={loginStatus} setLoginStatus={setLoginStatus} setIsLoggedIn={setIsLoggedIn}/>
            <ButtonPanel onClick={(e) => {
            showRegistrationPanel ? setShowRegistrationPanel(false) : (setShowRegistrationPanel(true))
          }}>{"Registration Panel"}</ButtonPanel>
          </>
        )
      )}
    </div>
  );
}

const ButtonPanel = styled.button`
  font-size: 18px;
  color: rgb(0,26,112);
  font-weight: 900;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 25px;
  background: rgb(255,255,255);
  width: 220px;
  height: 55px;
  border: 2px solid rgb(0,26,112);
  margin: 5px 0 0 0;
  &:active {
    border-radius: 25px;
    border: 2px solid rgb(0,26,112);
    background: rgb(0,26,112);
    color: rgb(255,255,255);
  }
  &:hover {
    border-radius: 25px;
    border: 2px solid rgb(0,26,112);
    background: rgb(0,26,112);
    color: rgb(255,255,255);
  }
`;

export default App;

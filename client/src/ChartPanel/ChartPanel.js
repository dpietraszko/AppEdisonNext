import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Charts from "../Components/Charts/Charts";
import Logo from "../Components/Logo/Logo";
import DropDownMenu from "../Components/DropDownMenu/DropDownMenu";

function ChartPanel(props) {
  const { isLoggedIn, setIsLoggedIn, loginStatus, setLoginStatus } = props;

  const [dataAPI, setDataAPI] = useState([]);

  return (
    <Container>
      <ContentHeader>
        <Logo/>
        <Header>{"Logged: " + loginStatus}</Header>
        <LoggedOutButton onClick={(e) => (setIsLoggedIn(false), setLoginStatus(""))}>Logout</LoggedOutButton>
      </ContentHeader>
      <DropDownMenu isLoggedIn={isLoggedIn} setDataAPI={setDataAPI}/>
      {typeof dataAPI.samples !== 'undefined' ? 
      <Charts dataChart={dataAPI.samples}/> : (<></>)
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  color: rgb(0,28,114);
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 1px;
  width: 400px;
  height: 50px;
  border-bottom: 2px solid rgb(254,87,22);
  background: rgb(255,255,255);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 1px;
`;

const LoggedOutButton = styled.button`
  font-size: 18px;
  color: rgb(0,28,114);
  font-weight: 900;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 25px;
  background: rgb(255,255,255);
  border: 2px solid rgb(254,87,22);
  width: 140px;
  height: 50px;
  margin: 10px 20px 40px 0;
  &:active {
    border-radius: 25px;
    border: 2px solid rgb(254,87,22);
    background: rgb(254,87,22);
    color: rgb(255,255,255);
  }
  &:hover {
    border-radius: 25px;
    border: 2px solid rgb(254,87,22);
    background: rgb(254,87,22);
    color: rgb(255,255,255);
  }
`;

export default ChartPanel;

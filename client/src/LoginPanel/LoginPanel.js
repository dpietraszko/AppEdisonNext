// ./src/LoginPanel.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import "../App.css";

export default function Registration(props) {
  const {title, loginStatus, setLoginStatus, setIsLoggedIn} = props;

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      id: employeeId,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setIsLoggedIn(false);
      } else {
        setLoginStatus(response.data[0].firstName + " " + response.data[0].lastName);
        setIsLoggedIn(true);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data[0].firstName + " " + response.data[0].lastName);
        setIsLoggedIn(true);
      }
    });
  }, []);

  return (
    <Container>
      <StyledRegistrationPanel>
      <Title>{title}</Title>
        <StyledInput
          type="number"
          placeholder="Id..."
          onChange={(e) => {
            setEmployeeId(e.target.value);
          }}
        />
        <StyledInput
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={login}> Login </Button>
      </StyledRegistrationPanel>
      <LoginStatus>{loginStatus}</LoginStatus>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const StyledRegistrationPanel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 3px solid #e9eaed;
  padding: 20px;
  margin: 20px;
  min-width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  color: rgb(0,33,135);
  margin-bottom: 20px;
  font-size: 24px;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  background: #ffffff;
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  border: none;
  width: 180px;
  height: 30px;
  margin: 12px;
  padding-left: 15px;
  font-size: 14px;
  &:focus {
    background: #bce0ff;
  }
`;

const Button = styled.button`
  font-size: 18px;
  color: rgb(0,33,135);
  font-weight: 900;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 25px;
  background: rgb(255,255,255);
  width: 140px;
  height: 50px;
  border: 2px solid rgb(254,87,22);
  margin: 5px 0 0 0;
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

const LoginStatus = styled.h1`
  text-align: center;
  color: rgb(0,33,135);
  margin-bottom: 20px;
  font-size: 24px;
`;



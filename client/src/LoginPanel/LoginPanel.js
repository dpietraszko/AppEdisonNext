// ./src/components/LoginPanel.js
import React, { useState } from "react";
import styled from "styled-components";
import { StyledField } from "../Components/Field/Field.styled";


const LoginPanel = (props) => {
  const { text, setIsLoggedIn, setIsLoggedInName } = props;

  const [employeeId, setEmployeeId] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = [];
    if (employeeId.length === 0 || employeeId.length <= 1) {
      err.push("* Field ID is required!");
    }

    if (firstName.length === 0 || firstName.length <= 1) {
      err.push("* First Name is required!");
    }

    if (lastName.length === 0 || lastName.length <= 1) {
      err.push("* Last Name is required!");
    }

    if (!email.includes("@")) {
      err.push("* Invalid email address!");
    }

    if (password.length < 6) {
      err.push("* Password is too short!");
    }

    if (err.length > 0) {
      alert("Login failed!");
    } else {
      alert("Welcome, you are logged in correctly!");

      setEmployeeId(1)
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setIsLoggedIn(true);

      setIsLoggedInName(firstName + " " + lastName);
    }

    setErrors(err);
    setIsSubmited(true);
  };

  return (
    <Container>
      <StyledLoginPanel
        isSubmited={isSubmited}
        isValid={isSubmited && errors.length === 0}
      >
        <Title>{text}</Title>
        <form noValidate onSubmit={handleSubmit}>
          <Row>
            <Label employeeId="employeeId">Employee Id</Label>
            <StyledField
              type="number"
              name="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="firstName">First Name</Label>
            <StyledField
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="lastName">Last Name</Label>
            <StyledField
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="email">Email</Label>
            <StyledField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Row>
          <Row>
            <Label fieldName="password">Password</Label>
            <StyledField
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <RowWithButton>
            <Submit />
          </RowWithButton>
        </form>
      </StyledLoginPanel>
      <ErrorBox>
        {errors.length > 0 ? <p>{errors.join("\n")}</p> : null}
      </ErrorBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginPanel = styled.section`
  background-color: #ffffff;
  border: 3px solid #e9eaed; //rgb(254,87,22)
  padding: 20px;
  margin: 20px;
  min-width: 350px;
`;

const Title = styled.h3`
  text-align: center;
  color: rgb(0,33,135);
  margin-bottom: 20px;
  font-size: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const RowWithButton = styled(Row)`
  justify-content: center;
  margin-top: 20px;
`;

const Label = styled.label.attrs((props) => ({
  htmlFor: `field-${props.fieldName}`,
}))`
  color: rgb(0,33,135);
  font-weight: bold;
  letter-spacing: 1px;
  width: 140px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6); //fe5716
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 5px 0;
`;

const Submit = styled.input.attrs(() => ({
  type: "submit",
  value: "Log in",
}))`
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

const ErrorBox = styled.section`
  color: red;
  width: 230px;
  font-weight: bold;
`;

export default LoginPanel;

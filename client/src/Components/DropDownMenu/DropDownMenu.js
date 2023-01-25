import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DropDownMenu = () => {

    const colorRef = useRef();
    const [counter, setCounter] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        setCounter("No counter selected");
      },[]);

    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        counter: colorRef.current.value
      };
      const json = JSON.stringify(data);
      console.clear();
      console.log(json);
      setCounter("Charts for " + data.counter);

      // Zamiast counter1 mozna do url wysyłaś zmienną z licznika energi, zmienną z której dane chcemy uzyskać na wykres.
      setUrl("http://978-tech-pcpw/asix/v1/variable/archive/processed?name= " + data.counter + "&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D");
    };

    return (
      <Form onSubmit={handleSubmit}>
        <ContentMenu>
          <Label>
            Select counter:
            <Select ref={colorRef}>
                <Option value=''>None</Option>
                <Option value='counter1'>Counter 1</Option>
                <Option value='counter2'>Counter 2</Option>
                <Option value='counter3'>Counter 3</Option>
                <Option value='counter4'>Counter 4</Option>
            </Select>
          </Label>
        </ContentMenu>
        <Button type='submit'>Confirm</Button>
        <SelectCounter>{counter}</SelectCounter>
        <TestUrl>{url}</TestUrl>
      </Form>
    );
}

const Form = styled.form`
  margin: 10px 0 30px 0;
`;

const ContentMenu = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 21px;
  color: rgb(0,26,112);
  font-weight: bold;
`;

const Select = styled.select`
  font-size: 16px;
  color: rgb(0,26,112);
  font-weight: bold;
  cursor: pointer;
  background: rgb(255,255,255);
  border: 2px solid rgb(254,87,22);
  width: 110px;
  height: 30px;
  margin-left: 10px;
`;

const Option = styled.option`
  color: rgb(0,26,112);
  font-size: 16px;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 12px;
  color: rgb(0,26,112);
  font-weight: 900;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 25px;
  background: rgb(255,255,255);
  width: 100px;
  height: 34px;
  border: 2px solid rgb(0,26,112);
  margin: 5px 0 5px 0;
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

const SelectCounter = styled.h1`
  color: rgb(254,87,22);
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const TestUrl = styled.h3`
  color: rgb(0,0,0);
  font-size: 16px;
  margin: 50px 0;
`;

export default DropDownMenu;
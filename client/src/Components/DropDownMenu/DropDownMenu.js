import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Counter from "../Counter/Counter";

const DropDownMenu = (props) => {
  const { isLoggedIn, setDataAPI } = props;


  const colorRef = useRef();
  const [variable, setVariable] = useState("Counter selected: JO976KGW_OPC_PALACZ_EnergiaK3");
  const [url, setUrl] = useState("http://978-tech-pcpw/asix/v1/variable/archive/processed?name=JO976KGW_OPC_PALACZ_EnergiaK3&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D");

  useEffect(() => {
    getDataAPI(url);
    // eslint-disable-next-line
  },[Counter(5) === 5 && isLoggedIn === true]);

// API -------------------------------------------------------------------------- //

  const getDataAPI = (urlAPI) => {
    // const url = "http://978-tech-pcpw/asix/v1/variable/archive/processed?name=JO976KGW_OPC_PALACZ_EnergiaK3&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D";
    // const url = "http://978-tech-pcpw/asix/v1/variable/archive/processed?name=JO976KGW_OPC_PALACZ_KG_LicznikEnergi&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D";

    fetch(urlAPI)
    .then((response) => response.json())
    .then((json) => {
      setDataAPI(json);
    })
  }
//------------------------------------------------------------------------------- //

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      variable: colorRef.current.value
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
    setVariable("Counter selected: "+ data.variable);
    setUrl("http://978-tech-pcpw/asix/v1/variable/archive/processed?name=" + data.variable + "&aggregate=Delta&periodStart=YEAR&periodLength=1MO&resampleInterval=1D");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContentMenu>
        <Label>
          Select counter:
          <Select ref={colorRef}>
              <Option value='JO976KGW_OPC_PALACZ_EnergiaK3'>Counter 1</Option>
              <Option value='JO976KGW_OPC_PALACZ_KG_LicznikEnergi'>Counter 2</Option>
              <Option value='JO976KGW_OPC_PALACZ_EnergiaK3'>Counter 3</Option>
              <Option value='FQ_R11L'>Counter 4</Option>
          </Select>
        </Label>
      </ContentMenu>
      <Button type='submit'>Confirm</Button>
      <SelectCounter>{variable}</SelectCounter>
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

export default DropDownMenu;
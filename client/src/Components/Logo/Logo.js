import React from "react";
import styled from "styled-components";
import elektrownia from '../../Images/EdisonNext_240x80.png';

function Logo() {

  return (
    <Container>
        <Img src={elektrownia} alt="Elektrownia" />
    </Container>
  );
}

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px; */
`;

const Img = styled.img`
  width: 240px;
  height: 80;
`;

export default Logo;

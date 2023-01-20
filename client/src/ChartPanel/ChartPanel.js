import React, { useState} from "react";
import styled from "styled-components";
import BarChart from "../Components/Charts/BarChart/BarChart";
import LineChart from "../Components/Charts/LineChart/LineChart";
// import PieChart from "../Charts/PieChart/PieChart";   
// import { UserData } from "./ChartData";
import { UserData } from "./ChartDataAsixMonth";
import Logo from "../Components/Logo/Logo";

function ChartPanel(props) {
   const { dataChart, setIsLoggedIn, setIsLoggedInName } = props;

  const [chartData, setChartData] = useState({
    labels: UserData.map((data) => data.e.substr(0,10)),
    datasets: [
      {
        label: "Chart Month",
        data: UserData.map((data) => data.v),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "Black",
        borderWidth: 2,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    },
    // plugins: {
    //   tooltip: {
    //     intersect: true
    //   }
    // }
  });

  // plugins: []

  return (
    <Container>
      <ContentHeader>
        <Logo/>
        <Header>{"Logged: " + setIsLoggedInName}</Header>
        <LoggedOutButton onClick={(e) => setIsLoggedIn(false)}>Log out</LoggedOutButton>
      </ContentHeader>
      <Row>
        <BarChart chartData={chartData} chartOptions={chartOptions} />
      </Row>
      <Row>
        <LineChart chartData={chartData} chartOptions={chartOptions}/>
      </Row>
      {/* { <Row>
        <PieChart chartData={chartData} chartOptions={chartOptions}/>               
      </Row> } */}
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

const Row = styled.div`
  width: 1000px ;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  color: rgb(0,28,114);
  font-weight: bold;
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

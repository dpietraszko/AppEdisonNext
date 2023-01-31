import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
// import PieChart from "./PieChart/PieChart";   
// import { UserData } from "./ChartData";
// import { UserData } from "./ChartDataAsixMonth";

function Charts(props) {
  const { dataChart } = props;

  const [chartData, setChartData] = useState({
    labels: dataChart.map((data) => data.e.substr(0,10)),
    datasets: [
      {
        label: "Chart Month",
        data: dataChart.map((data) => data.v),
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
  });

  useEffect(() => {
    setChartData({
      labels: dataChart.map((data) => data.e.substr(0,10)),
      datasets: [
        {
          label: "Chart Month",
          data: dataChart.map((data) => data.v),
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
  },[dataChart]);


  return (
    <Container>
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

export default Charts;

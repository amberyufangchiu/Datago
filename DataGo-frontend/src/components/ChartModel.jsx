import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartModel = ({ setChartToggle }) => {
  const [chartData, setChartData] = useState([]);

  async function getTeamChart() {
    await axios
      .get("http://localhost:9999/getTeamChart")
      .then((res) => {
        // console.log(res.data);
        setChartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const teamNameArray = [];
  const teamNumsArray = [];

  for (let i = 0; i < chartData.length; i++) {
    const teamName = chartData[i].team_name;
    const teamNums = chartData[i].nums;
    teamNameArray.push(teamName);
    teamNumsArray.push(teamNums);
  }

  useEffect(() => {
    getTeamChart();
  }, []);

  return (
    <div id="chart">
      <div className="chartBG">
        <div className="chartContainer">
          <div className="chartHeader">
            <p>chart</p>
            <button onClick={() => setChartToggle(false)}>x</button>
          </div>
          <Bar
            data={{
              labels: teamNameArray,
              datasets: [
                {
                  label: "Number of People",
                  data: teamNumsArray,
                  backgroundColor: [
                    "#54bebe",
                    "#76c8c8",
                    "#98d1d1",
                    "#badbdb",
                    "#dedad2",
                    "#e4bcad",
                    "#df979e",
                    "#d7658b",
                    "#c80064",
                  ],
                },
              ],
            }}
            height={150}
            width={150}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartModel;

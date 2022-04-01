import React, { useState } from "react";
import ChartModel from "./ChartModel";
import { AiOutlineBarChart } from "react-icons/ai";

const Chart = () => {
  const [chartToggle, setChartToggle] = useState(false);
  return (
    <div className="show-chart">
      <button
        className="show-chart-btn"
        onClick={() => {
          setChartToggle(true);
        }}
      >
        Show Charts&nbsp;
        <AiOutlineBarChart />
      </button>
      {chartToggle && <ChartModel setChartToggle={setChartToggle} />}
    </div>
  );
};

export default Chart;

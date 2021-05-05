import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";

export default function AreaChart(props) {
    const { areaChartData, areaChartOptions } = props;
  return <Line data={areaChartData} options={areaChartOptions} />;
}

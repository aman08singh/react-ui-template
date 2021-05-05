import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";

export default function DonutChart(props) {
    const { donutChartData, barChartOptions } = props;
  return <Doughnut data={donutChartData} />;
}

import React from 'react';
import { Line, Doughnut, Bar } from "react-chartjs-2";

export default function BarChart(props) {
    const { barChartData, barChartOptions } = props;
    return (
        <Bar data={barChartData} options={barChartOptions} />
    )
}

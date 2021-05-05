import React from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
// import { Line, Doughnut, Bar } from "react-chartjs-2";

export default function index() {
  const areaChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Earnings",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
    }],
  };

  const areaChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const donutChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Charts</h1>
      <p className="mb-4">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the{" "}
        <a target="_blank" href="https://www.chartjs.org/docs/latest/">
          official Chart.js documentation
        </a>
        .
      </p>
      {/* Content Row */}
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          {/* Area Chart */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
            </div>
            <div className="card-body">
              {/* <div className="chart-area"> */}
              {/* <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className />
                  </div>
                </div> */}
              {/* <canvas
                  id="myAreaChart"
                  style={{ display: "block", width: "623px", height: "320px" }}
                  width={623}
                  height={320}
                  className="chartjs-render-monitor"
                /> */}
              {/* <Line data={areaChartData} options={areaChartOptions} /> */}
              <AreaChart areaChartData={areaChartData} areaChartOptions={areaChartOptions} />
              {/* </div> */}
              <hr />
              Styling for the area chart can be found in the
              <code>/js/demo/chart-area-demo.js</code> file.
            </div>
          </div>
          {/* Bar Chart */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
            </div>
            <div className="card-body">
              {/* <div className="chart-bar">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className />
                  </div>
                </div>
                <canvas
                  id="myBarChart"
                  width={623}
                  height={320}
                  style={{ display: "block", width: "623px", height: "320px" }}
                  className="chartjs-render-monitor"
                />
              </div> */}
              {/* <Bar data={barChartData} options={barChartOptions} /> */}
              <BarChart barChartData={barChartData} barChartOptions={barChartOptions} />
              <hr />
              Styling for the bar chart can be found in the
              <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
          </div>
        </div>
        {/* Donut Chart */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              {/* <Doughnut data={donutChartData} /> */}
              <DonutChart donutChartData={donutChartData} />
              {/* <div className="chart-pie pt-4">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className />
                  </div>
                </div>
                <canvas
                  id="myPieChart"
                  width={278}
                  height={253}
                  style={{ display: "block", width: "278px", height: "253px" }}
                  className="chartjs-render-monitor"
                />
              </div> */}
              <hr />
              Styling for the donut chart can be found in the
              <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import InfoCard from "../card/InfoCard";
import BigCard from "../card/BigCard";
import ColorCard from "../card/ColorCard";

export default function Dashboard() {
  const earningOverviewArray = [
    {
      value: "Action",
      link: "#",
    },
    {
      value: "Another action",
      link: "#",
    },
    {
      value: "Something else here",
      link: "#",
    },
  ];

  const revenueSourcesPieChartOptions = [
    {
      value: "Direct",
    },
    {
      value: "Social",
    },
    {
      value: "Referal",
    },
  ];

  const colorTabs = [
    {
      bootstrapColorClass: "bg-primary text-white",
      value: "Primary",
      hexColorCode: "#4e73df",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-success text-white",
      value: "Success",
      hexColorCode: "#1cc88a",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-info text-white",
      value: "Info",
      hexColorCode: "#36b9cc",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-warning text-white",
      value: "Warning",
      hexColorCode: "#f6c23e",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-danger text-white",
      value: "Danger",
      hexColorCode: "#e74a3b",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-secondary text-white",
      value: "Secondary",
      hexColorCode: "#858796",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-light text-black",
      value: "Light",
      hexColorCode: "#f8f9fc",
      textColor: "text-white-50",
    },
    {
      bootstrapColorClass: "bg-dark text-white",
      value: "Dark",
      hexColorCode: "#5a5c69",
      textColor: "text-black-50",
    },
  ];

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </Link>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <InfoCard
            heading="Earnings (Monthly)"
            value="$40,000"
            icon="fa-calendar"
            cardClassName="border-left-primary"
            headingClassName="text-primary"
          />
        </div>
        {/* Earnings (Annual) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <InfoCard
            heading="Earnings (Annual)"
            value="$215,000"
            icon="fa-dollar-sign"
            cardClassName="border-left-success"
            headingClassName="text-success"
          />
        </div>
        {/* Tasks Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <InfoCard
            heading="Tasks"
            icon="fa-clipboard-list"
            cardClassName="border-left-info"
            headingClassName="text-info"
          >
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                  50%
                </div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
        {/* Pending Requests Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <InfoCard
            heading="Pending Requests"
            value="18"
            icon="fa-comments"
            cardClassName="border-left-warning"
            headingClassName="text-warning"
          />
        </div>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Area Chart */}
        <div className="col-xl-8 col-lg-7">
          <BigCard
            heading="Earnings Overview"
            dropDownItems={earningOverviewArray}
            dropDownHeader="Earnings Overview"
            canvasId="myAreaChart"
            chart="areaChart"
          />
        </div>
        {/* Pie Chart */}
        <div className="col-xl-4 col-lg-5">
          <BigCard
            heading="Revenue Sources"
            dropDownItems={earningOverviewArray}
            dropDownHeader="Earnings Overview"
            canvasId="myAreaChart"
            chart="myPieChart"
            chartOptions={revenueSourcesPieChartOptions}
          />
        </div>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Content Column */}
        <div className="col-lg-6 mb-4">
          <BigCard heading="Projects">
            {/* Project Card Example */}
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Server Migration <span className="float-right">20%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Sales Tracking <span className="float-right">40%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Customer Database <span className="float-right">60%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Payout Details <span className="float-right">80%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <h4 className="small font-weight-bold">
                Account Setup <span className="float-right">Complete!</span>
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </BigCard>
          {/* Color System */}
          <div className="row">
            <ColorCard colorTabs={colorTabs} />
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          {/* Illustrations */}
          <BigCard heading="Illustrations">
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src="img/undraw_posting_photo.svg"
                  alt="..."
                />
              </div>
            </div>
          </BigCard>
          {/* Approach */}
          <BigCard heading="Development Approach">
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </BigCard>
        </div>
      </div>
    </div>
  );
}

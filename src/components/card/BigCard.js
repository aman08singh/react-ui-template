import React from "react";
import { Link } from "react-router-dom";

export default function BigCard(props) {
  const {
    heading,
    dropDownItems,
    dropDownHeader,
    canvasId,
    chart,
    chartOptions,
    children
  } = props;

  function dropDownHelper() {
    return dropDownItems.map((item, i) => {
      if (i === dropDownItems.length - 1) {
        return (
          <>
            <div key={i} className="dropdown-divider" />
            <Link className="dropdown-item" to="#">
              {item.value}
            </Link>
          </>
        );
      } else {
        return (
          <>
            <Link key={i} className="dropdown-item" to="#">
              {item.value}
            </Link>
          </>
        );
      }
    });
  }

  function cardBodyHelper() {
    if (chart === "areaChart") {
      return (
        <div className="card-body">
          <div className="chart-area">
            <canvas id={canvasId} />
          </div>
        </div>
      );
    } else if (chart === "myPieChart") {
      return (
        <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart" />
          </div>
          <div className="mt-4 text-center small">
            {chartOptions &&
              chartOptions.map((item, i) => (
                <span className="mr-2">
                  <i className={`fas fa-circle ${chartClassHelper(i)}`} />{" "}
                  {item.value}
                </span>
              ))}
          </div>
        </div>
      );
    }
    else return (children)
  }

  function chartClassHelper(i) {
    if (i === 0) return "text-primary";
    if (i === 1) return "text-success";
    if (i === 2) return "text-info";
  }

  return (
    <div className="card shadow mb-4">
      {/* Card Header - Dropdown */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">{heading}</h6>
        { dropDownItems && dropDownItems.length > 0 && (
          <div className="dropdown no-arrow">
            <Link
              className="dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">{dropDownHeader}</div>
              {dropDownHelper()}
              {/* Dropdown Links */}
            </div>
          </div>
        )}
      </div>
      {/* Card Body */}
      {cardBodyHelper()}
    </div>
  );
}

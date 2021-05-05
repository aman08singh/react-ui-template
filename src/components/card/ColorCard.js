import React from "react";

export default function ColorCard(props) {
  const { colorTabs, textColor } = props;
  return (
    <>
      {colorTabs &&
        colorTabs.map((item, i) => (
          <div className="col-lg-6 mb-4">
            <div className={`card ${item.bootstrapColorClass} shadow`}>
              <div className="card-body">
                {item.value}
                <div className={`${textColor} small`}>{item.hexColorCode}</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

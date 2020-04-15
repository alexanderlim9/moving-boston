import React, { useState } from "react";

import "./progressbar-styles.css";
// get options as props as json object get keys, callback prop for option values

const ProgressBar = props => {
  // should receive from props: step # and an int % for progress within step

  const getTextColor = background => {
    return background === "#EBFF00" ? "black" : "white";
  };

  return (
    <div className="progressbar">
      <div className="pb__bar-container">
        <div
          className="pb__color-indicator pb__completed"
          style={{ width: props.progressAmount }}
        />
        <div className="pb__color-indicator pb__incomplete" />
      </div>

      <div className="pb__numbers">
        <div
          className="pb__number"
          style={{
            backgroundColor: props.oneColor,
            color: getTextColor(props.oneColor)
          }}
        >
          1
        </div>
        <div
          className="pb__number"
          style={{ backgroundColor: props.twoColor, color: getTextColor(props.twoColor) }}
        >
          2
        </div>
        <div
          className="pb__number"
          style={{ backgroundColor: props.threeColor, color: getTextColor(props.threeColor) }}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from "react";

const strokeStyle = { vectorEffect: "non-scaling-stroke" };

const CloseIcon = props => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 37 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0.353553" y1="0.646447" x2="35.7089" y2="36.0018" stroke={props.strokeColor} />
    <line x1="35.7089" y1="1.35355" x2="0.353554" y2="36.7089" stroke={props.strokeColor} />
  </svg>
);

export default CloseIcon;

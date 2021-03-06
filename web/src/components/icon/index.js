import React from "react";
import HamburgerIcon from "./hamburger";
import CloseIcon from "./close";
import TooltipIcon from "./tooltip";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon strokeColor={props.strokeColor}/>;
    case "close":
      return <CloseIcon strokeColor={props.strokeColor}/>;
    case "tooltip":
      return <TooltipIcon fill={props.strokeColor}/>;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;

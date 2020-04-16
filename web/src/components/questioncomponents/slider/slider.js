import React from 'react';
import Icon from "../../icon";
import "./slider-styles.css";

const Slider = props => {
  return (
    <div className="slider-container">
      <p className="slider-title">{props.sliderTitle}</p>
      <div className="tooltip"><Icon className="slider-tooltip" symbol={'tooltip'} />
  <span className="tooltiptext">{props.tooltipText}</span>
      </div>
      <div className="slider-labels">
        <label>Very unlikely</label>
        <label>Very likely</label>
      </div>
      <input type="range" min="1" max="100" value={props.value}className="slider"/>
    </div>
  );
}

export default Slider;
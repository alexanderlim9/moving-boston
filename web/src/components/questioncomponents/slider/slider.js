import React from "react";
import Icon from "../../icon";
import Draggable from 'react-draggable';
import "./slider-styles.css";

const Slider = props => {
  const startX = (window.innerWidth - 320) / 2;
  let getXPos = (sliderNumber) => {
    return document.getElementsByClassName('slider-span')[sliderNumber].getBoundingClientRect().left + 5;
  }

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
      <div className="slider-object">
        <hr className="slider-rule"/>
        <Draggable 
        axis="x"
        bounds="parent"
        defaultPosition={{x: startX, y: 0}}
        disabled={props.zero}
        >
          <div className="slider-span">
            <div id="slider-circle" style={ props.zero ? {transform: `translate(-${getXPos(props.sliderNumber)-80}px, 0px)`, transition: 'transform 2s ease-in-out'} : null}/>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Slider;
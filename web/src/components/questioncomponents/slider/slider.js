import React, { useState } from "react";
import Icon from "../../icon";
import Draggable from 'react-draggable'; // The default
import "./slider-styles.css";

const Slider = props => {
  const startX = (window.innerWidth - 320) / 2;
  const [zero, setZero] = useState(false);
  const getXPos = () => {
    return document.getElementById('slider-span').getBoundingClientRect().left;
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
        // defaultPosition={{x: startX, y: 0}}
        >
          {/* <div className="slider-circle" style={`${zero ? setToZero : " "}`}/> */}
          <div id="slider-span">
            <div id="slider-circle" style={ zero ? {transform: `translate(-${getXPos()-80}px, 0px)`, transition: 'transform 2s ease-in-out'} : {background: 'yellow'}}/>
            {/* <div id="slider-circle" style={ `${zero ? {transform: `translate(- ${getXPos()} , 0px)`, transition: 'transform 2s ease-in-out'} : {background: 'yellow'}}`}/> */}
            {/* <div id="slider-circle" style={ zero ? {transform: 'translate(-' + 100 + ', 0px)', transition: 'transform 2s ease-in-out'} : {background: 'yellow'}}/> */}
          </div>
        </Draggable>
      </div>
      <button onClick={() => {console.log(`translate(-${getXPos()}px, 0px)`); setZero(true)}}></button>
      {/* <input type="range" min="1" max="100" className="slider"/> */}
    </div>
  );
}

export default Slider;
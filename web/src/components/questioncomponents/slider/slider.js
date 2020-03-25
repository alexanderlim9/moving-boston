import React from 'react';
import "./slider-styles.css";

const Slider = props => {
  return (
    <div class="slider-container">
      <p class="slider-title">{props.sliderTitle}</p>
      <div class="slider-labels">
        <label>Very unlikely</label>
        <label>Very likely</label>
      </div>
      <input type="range" min="1" max="100" class="slider"/>
    </div>
  );
}

export default Slider;
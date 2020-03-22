import React from 'react';
import "./slider-styles.css";

function valuetext(value) {
  return `${value}°C`;
}

export default function Slider() {

  return (
    <div class="slidecontainer">
      <input type="range" min="1" max="100" class="slider"/>
    </div>
  );
}

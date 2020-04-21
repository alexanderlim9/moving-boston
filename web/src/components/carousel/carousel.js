import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel-styles.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div className="slide">
            <img className="slide-photo" src={require("../../assets/inspiration/dc.png")}></img>
            <h3>Washington, District of Columbia</h3>
            <p>DC’s Back2Good campaign has worked to make the Metro more reliable, safer, and more efficient. </p>
          </div>
          <div className="slide">
          <img className="slide-photo" src={require("../../assets/inspiration/china.png")}></img>
            <h3>China</h3>
            <p>The China Railway High Speed transports its passengers at a speed of anywhere from 160 mph to 300 mph.</p>
          </div>
          <div className="slide">
          <img className="slide-photo" src={require("../../assets/inspiration/kansas-city.png")}></img>
            <h3>Kansas City, Missouri</h3>
            <p>In 2019, Kansas City became the first major city in the United States to offer free public transit.</p>
          </div>
          <div className="slide">
          <img className="slide-photo" src={require("../../assets/inspiration/la-paz.png")}></img>
            <h3>La Paz, Bolivia</h3>
            <p>La Paz’s cable cars serve as an eco-friendly alternative to driving a car or taking a bus, keeping streets less congested.</p>
          </div>
          <div className="slide">
          <img className="slide-photo" src={require("../../assets/inspiration/boston.png")}></img>
            <h3>Boston, Massachusetts</h3>
            <p>We can even be inspired by our own programs – Boston’s BlueBike has made it easier to get to and from T stations, reducing the need for cars or ride-hailing services.</p>
          </div>
        </Slider>
      </div>
    );
  }
}
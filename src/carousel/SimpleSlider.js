import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./simpleslider.css";
import Qr from './qr.png';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="carousel">
        <div>
        <img src={Qr} alt='qr'/>
        <p>1</p>
        </div>
        <div>
        <img src={Qr} alt='qr'/>
        <p>2</p>
        </div>
        <div>
        <img src={Qr} alt='qr'/>
        <p>3</p>
        </div>
        <div>
        <img src={Qr} alt='qr'/>
        <p>4</p>
        </div>
        <div>
        <img src={Qr} alt='qr'/>
        <p>5</p>
        </div>
        <div>
          <img src={Qr} alt='qr'/>
          <p>6</p>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider


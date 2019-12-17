import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SimpleSlider.css";
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
        <h1 className='carouselheading'>Social Media Profiles</h1>
        <img src={Qr} alt='qr'/>
        </div>
        <div>
        <h1 className='carouselheading'>Portfolio</h1>
        <img src={Qr} alt='qr'/>
        </div>
        <div>
        <h1 className='carouselheading'>Phone number & Social Media Profiles</h1>
        <img src={Qr} alt='qr'/>
        </div>
        <div>
        <h1 className='carouselheading'>LinkedIn & CV</h1>
        <img src={Qr} alt='qr'/>
        </div>
        <div>
        <h1 className='carouselheading'>App</h1>
        <img src={Qr} alt='qr'/>
        </div>
        <div>
        <h1 className='carouselheading'>Music</h1>
        <img src={Qr} alt='qr'/>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider


import React, {Component} from 'react';
import Slider from "react-slick";
import './slider.scss';
class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={'slider-wrap position-relative'}>
                <Slider {...settings}>
                    <div className="slider-item position-relative">
                        <div className="slider-image slider-overlay"style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(/assets/slider/slider1.jpg)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                    <h1 className="text-white">Green Vista MURREE <br/><h3 className='text-white'>Project by Exquisite builders</h3><br/><h2 className='text-white'>Where Every Detail Exudes Elegance </h2></h1>
                                    <h5 className="text-white mt-5">Convenient Location – Best Price<br/>
                                        – 1 or 2 Bedroom and Commercial Apartment.</h5>
                                </div>
                                {/* <div className="slider-footer text-left">
                                    <h6 className="text-white">opening hours</h6>
                                    <p className="text-white">Mon - Fri: 10am - 7pm   /   Sat: 10am - 5pm   /   Sun: 1pm - 5pm</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="slider-item position-relative">
                        <div className="slider-image slider-overlay" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(/assets/slider/slider2.jpg)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                    <h2 className="text-white">Smart Living with <br/> exquisite services </h2>
                                    <h5 className="text-white mt-5">Convenient Location – Best Price <br/>
                                        – 1 or 2 Bedroom and Commercial Apartment.</h5>
                                </div>
                                <div className="slider-footer text-left">
                                    <h6 className="text-white">opening hours</h6>
                                    <p className="text-white">Mon - Fri: 10am - 7pm   /   Sat: 10am - 5pm   /   Sun: 1pm - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative">
                        <div className="slider-image slider-overlay" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(/assets/slider/slider3.jpg)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                    <h2 className="text-white">Panoramic<br/> Balcony Vistas</h2>
                                    <h5 className="text-white mt-5">Convenient Location – Best Price <br/>
                                        – 1 or 2 Bedroom and Commercial Apartment.</h5>
                                </div>
                                <div className="slider-footer text-left">
                                    <h6 className="text-white">opening hours</h6>
                                    <p className="text-white">Mon - Fri: 10am - 7pm   /   Sat: 10am - 5pm   /   Sun: 1pm - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative">
                        <div className="slider-image slider-overlay" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(/assets/slider/slider4.jpg)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                <h2 className="text-white">Elegant design with<br/> modern reception </h2>
                                    <h5 className="text-white mt-5">Convenient Location – Best Price <br/>
                                        – 2 or 3 Bedroom and Commercial Apartment.</h5>
                                </div>
                                <div className="slider-footer text-left">
                                    <h6 className="text-white">opening hours</h6>
                                    <p className="text-white">Mon - Fri: 10am - 7pm   /   Sat: 10am - 5pm   /   Sun: 1pm - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SliderHome
import React, { Component } from 'react';
import './caltoaction.scss';

class CallToActionSection extends Component {
    handleClick = (event) => {
        event.preventDefault()
        var element = document.getElementById("availabilityDiv");
        debugger;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    render() {
        return (
            <div className="call-to-action text-center">
                <div className="container ">
                    <h3 className="text-uppercase text-white">AVAILABLE FOR</h3>
                    <h2 className="text-uppercase text-white"> IMMEDIATE OCCUPANCY !</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">1 min walk from Chayee Khana</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">2 mins walk from Gloria Jeans</h3>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">3 mins walk from Habibi Restaurant</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.5459379052363!2d73.43079999999999!3d33.875591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUyJzMyLjEiTiA3M8KwMjUnNTAuOSJF!5e0!3m2!1sen!2s!4v1709549369201!5m2!1sen!2s&zoom=50"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" />
               
            </div>
        )
    }
}

export default CallToActionSection
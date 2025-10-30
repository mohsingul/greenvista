import React, { Component } from 'react';
import './amenities.scss';
import Heading from "../../common/heading/heading";
import CarouselPage1 from "../../common/slider/slider1";

class AmenitiesSection extends Component {
    render() {
        return (
            <div className="row align-items-center" id='amenitiesDiv'>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <CarouselPage1 />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 content-right">
                    <Heading>BUILDING AMENITIES</Heading>
                    <p className="mb-5">
                        Merely an hour from the center of the
                        capital city of Islamabad, you are never
                        completely disconnected from
                        civilization. And yet, the context of the
                        project provides an excellent retreat
                        from the hustle and bustle of the city.
                        Right in the middle of nature, you can
                        spend your days viewing a panoramic
                        green vista looking across to the
                        mountains of Kashmir. All alongside the
                        convenience of having some of the best
                        restaurants a short walk away.
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="icon-list">
                                <div className="icon-list-wrap">
                                    <ul>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">4 Star Hotel</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Food Court</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Fitness Facility</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Spa Facility</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Sports Facility</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="icon-list">
                                <div className="icon-list-wrap">
                                    <ul>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Elegant Mosque</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">24/7 Security Surveillance</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Valet Parking</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Laundary Facility</span>
                                        </li>
                                        <li className="icon-list-items">
                                            <span className="icon-list-icon">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                            <span className="icon-list-text">Indoor Swimming Pool</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AmenitiesSection
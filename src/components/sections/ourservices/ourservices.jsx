import React, {Component} from 'react';
import './ourservices.scss';
import Heading from "../../common/heading/heading";

class OurServicesSection extends Component {
    render (){
        return (
            <div className="ourservices">
                <div className="container">
                    <Heading>Why you should choose Green Vista</Heading>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Luxury Office Living Redefined</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">We design and service
                                            the next generation office building – one that feels more like a
                                            full-service, lifestyle living experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-user"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Expertise Across Modern Construction</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">We are a team of 100 people who specialize in hospitality, technology, design, production and construction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-coffee"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Elevated Living Experiences Delivered</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Serious about excellence, we curate modern living experiences with all your essentials covered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-badge"></i></div>
                                        <h3 className="featured-box-title text-uppercase">We’re Here To Make You Successful</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">For each space we design, each technology project we carry, every building we construct, and every line item in the production schedule</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2 ">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-like"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Human-Centered Design Friendly Spaces</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Our design philosophy and continuous improvement methodology aims to enhance the experience of Green Vista living.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-config"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Innovative Solutions for Exceptional Results</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">At the heart of our success are our cutting-edge technologies and resources in architecture, design, planning, and management. They empower us to consistently deliver exceptional results that exceed expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurServicesSection
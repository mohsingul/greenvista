import React, { Component } from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import './the-building.scss';
import CounterBlockStyle from "../../common/countup/countup-style";
import GallerrySection from "../../sections/gallerry/gallerry";
class TheBuildingPage extends Component {
    render() {

        return (
            <div className={`the-building-wrap`}>
                <Helmet>
                    <title>Green Vista | The Building Page</title>
                </Helmet>
                <Breadcrumb title={'The Building'} />
                <div className="section-wrapper">
                    <div className="container">
                        <div className="text-description text-center pt-5">
                            <h3 className="text-primary">ARE YOU INTERESTED</h3>
                            <h2>IT'S TIME TO DISCOVER</h2>
                            <h3>THE BUILDING</h3>
                            <p className="text-black-50 mt-5"><strong>With it's exquisite location next to the most popular cafés on Murree Expressway with
                                panoramic views of the Kashmir Mountains across a lush green valley, Green Vista offers
                                some of the most luxurious residential apartments for their esteemed clients in the Murree
                                Hills. </strong></p>
                            <p className="mt-4">Offering beautifully designed 1 bed and 2 bed apartments alongside a multitude of
                                services. Our commercial offerings provide a golden opportunity to grow your business in a
                                scenic location just an hour from Islamabad. </p>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper text-center">
                    <CounterBlockStyle />
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="text-description text-center">
                            <h3>A BETTER WAY TO OFFER BUILDING AMENITIES TO OFFICE TENANTS …</h3>
                            <h3>LANDLORDS ARE APPROACHING THIS WORKPLACE TREND IS BY</h3>
                            <h3>PROVIDING PREMIUM AMENITIES AND SERVICES.</h3>
                            <div className="row mt-5 pt-5">
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">AMENITIES.</h3>
                                    <p>Conference facilities</p>
                                    <p>Reliable, fast Wi-Fi</p>
                                    <p>Easy access to parking and transportation</p>
                                    <p>Dining options</p>
                                    <p>Fully equipped fitness centers</p>
                                    <p>Outdoor space</p>
                                    <p>Eco-friendly options</p>
                                    <p>Charging outlets with USB ports</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Retail Amenities</p>
                                    <p>Community events and classes</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">SERVICES .</h3>
                                    <p>Daylight and artificial lighting</p>
                                    <p>Escalators and lifts</p>
                                    <p>Ventilation and refrigeration</p>
                                    <p>Security and alarm systems</p>
                                    <p>Fire detection and protection</p>
                                    <p>Energy supply and use</p>
                                    <p>Facade engineering</p>
                                    <p>Air conditioning and refrigeration</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Heating and ventilating</p>
                                    <p>Water, drainage and plumbing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="gallerry-wrap">
                        <GallerrySection flexRow={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TheBuildingPage
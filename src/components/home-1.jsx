import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
// Import custom components
import SliderHome from "./common/slider/slider";
import OverviewSection from "./sections/overview/overview";
import CounterBlock from "./common/countup/countup";
import OurServicesSection from "./sections/ourservices/ourservices";
import CallToActionSection from "./sections/caltoaction/caltoaction";
import AvailabilitySection from "./sections/availability/availability";
import AmenitiesSection from "./sections/amenities/amenities";
import ApartmentsPlansSection from "./sections/ourvalues/ourvalues";
import ExploreAmenitiesSection from './sections/explore-amenities/explore-amenities'
import BlogBlockGridStyle2 from "./common/blog/blog1";
import NeighborhoodsSection from "./sections/neighborhoods/neighborhoods";
class Home1 extends Component {
    render() {
        return (
            <div className={`home-page-wrap`}>
                <Helmet>
                    <title>GreenVistaMurree</title>
                </Helmet>
                <div className="section-wrapper pt-0 pb-0">
                    <SliderHome/>
                </div>
                <div className="section-wrapper">
                    <OverviewSection/>
                </div>

                <div className="section-wrapper">
                    <CounterBlock/>
                </div>

                <div className="section-wrapper pl-6 pr-6">
                    <AmenitiesSection/>
                </div>
                <div className="section-wrapper">
                    <OurServicesSection/>
                </div>
                <div className="section-wrapper">
                    <ApartmentsPlansSection/>
                </div>

                {/* <div className="section-wrapper pb-0">
                    <CallToActionSection/>
                </div> */}

                <div className="section-wrapper pb-0">
                    <ExploreAmenitiesSection/>
                </div>
                {/* <div className="section-wrapper">
                    <NeighborhoodsSection />
                </div> */}

                <div className="section-wrapper">
                    <AvailabilitySection/>
                </div>

                {/* <div className="section-wrapper" style={{backgroundColor: "#f8f8f8"}}>
                    <BlogBlockGridStyle2/>
                </div> */}

            </div>
        )

    }
}

export default Home1;
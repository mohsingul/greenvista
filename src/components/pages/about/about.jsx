import React, { Component } from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import { Parallax } from 'react-parallax';
import Heading from "../../common/heading/heading";
import './about.scss';
import OurTeamBlock from "../../common/our-team/our-team";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import OurTeamSection from "../../sections/our-team/our-team";

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page-wrap">
                <Helmet>
                    <title>GreenVista | About Page</title>
                </Helmet>
                <Breadcrumb title={'About Us'} />

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>About Us</Heading>
                                <p className="text-black content-center" >
                                    Green Vista, the latest masterpiece crafted by our dedicated team of<b> Exquisite Builders</b>.
                                    <br />
                                    <br />
                                    Experience the culmination of innovation and expertise, our collaborative ventures with <strong>Giga Group</strong> and <strong>Zeeruk International Engineering.</strong> Together, we've orchestrated the creation of Green Vista, each a testament to our commitment to excellence.
                                    <br />
                                    <br />
                                    Highlights for few deliverables : <br />
                                    <ul>
                                        <li >
                                            Mountain Leaf in Kashmiri Bazaar
                                        </li>
                                        <li >
                                            Mountain Leaf 2 along the main expressway near Gloria Jeans Murree
                                        </li>
                                        <li >
                                            10 modern, well-furnished villas in E-11 and I-8 Islamabad
                                        </li>
                                        <li >
                                            Faisal Town development showcases five magnificent homes, each spanning 2800 square feet
                                        </li>
                                        <li >
                                            Naran Saiful Malook Apartments project embodies elegance and sophistication in every detail
                                        </li>
                                    </ul>
                                </p>
                                {/* <p>
                                    We recognise that the ongoing support of an engaged community is integral to the
                                    future of B2B media, meaning that we’re focused on delivering an audience inspired
                                    approach to knowledge generation and intelligence provision. Through the Building
                                    family of products and services, our community reach now extends across digital,
                                    print and live platforms, and as a result we’re more than just a media provider;
                                    we’re an influential hub for world-class thought leadership and innovation.
                                </p> */}
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebpss/about/banner_ab1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">

                    <Parallax
                        className={`section-parallax`}
                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebpss/about/bg_ab1.webp`}
                        bgImageAlt="the cat"
                        strength={500}
                    >
                        <div className="about-parallax  position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">30 +</div>
                                                <div className="counter-text">IN-House designed contructions</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">10 MILLION +</div>
                                                <div className="counter-text">SQFT constructed and designed</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">25+</div>
                                                <div className="counter-text">Years of experience in Real Estate Industry</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <img className="img-fluid" src="/assets/imagewebpss/about/vista.png" alt="" />
                                                <div className="counter-text">Green Vista</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <img className="img-fluid" src="/assets/imagewebpss/about/giga.png" alt="" />
                                                <div className="counter-text">Giga Group</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <img className="img-fluid" src="/assets/imagewebpss/about/zeeruk.png" alt="" />
                                                <div className="counter-text">Zeeruk International</div>


                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </Parallax>

                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebpss/about/bannerStory.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>OUR STORY</Heading>
                                <p>
                                    Exquisite Builders was born out of a deep-seated passion for transforming dreams into reality within the real estate sector. With a rich history steeped in innovation and craftsmanship, our journey began with a vision to redefine the landscape of modern living. Guided by a steadfast commitment to excellence and integrity, we embarked on a mission to create enduring spaces that inspire, elevate, and enrich lives. Over the years, we've built a reputation for delivering exceptional quality, unparalleled service, and timeless designs that stand as testaments to our dedication to the craft.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>OUR VALUES</Heading>
                                <p>
                                    Exquisite Builders was born out of a deep-seated passion for transforming dreams into reality within the real estate sector. With a rich history steeped in innovation and craftsmanship, our journey began with a vision to redefine the landscape of modern living. Guided by a steadfast commitment to excellence and integrity, we embarked on a mission to create enduring spaces that inspire, elevate, and enrich lives. Over the years, we've built a reputation for delivering exceptional quality, unparalleled service, and timeless designs that stand as testaments to our dedication to the craft.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebpss/about/banner_ab3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebpss/about/banner_ab4.webp" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>STRATEGY, MISSION, VISION</Heading>
                                <p>
                                    At Exquisite Builders, our strategy revolves around a relentless pursuit of excellence and innovation, capitalizing on emerging market trends to deliver exceptional value to our clients and stakeholders. Our mission is to inspire and empower individuals and communities through the creation of exceptional real estate developments, exceeding expectations with unparalleled quality, craftsmanship, and service. Our vision is to be recognized as a leader and innovator in the industry, shaping the future of modern living with iconic landmarks that transcend time and leave a lasting legacy of beauty, functionality, and sustainability.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="section-wrapper">
                    <CallToActionSection />
                </div> */}
                <div className="section-wrapper">
                    <OurTeamSection />
                </div>
            </div>
        )
    }
}

export default AboutPage
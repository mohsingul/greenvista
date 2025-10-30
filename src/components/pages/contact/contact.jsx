import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import './contact.scss';
import ContactForm from '../../common/contact-form/contact-form';

class ContactPage extends Component {
    render() {

        return (
            <div className={`contact-page-wrap`}>
                <Helmet>
                    <title >Green Vista | Contact Us Page</title>
                </Helmet>
                <Breadcrumb title={'Contact Us'} bgImage={`/assets/images/breadcrumb/6.jpg`}/>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon"><i className="opal-icon-phone"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">PHONE :</span>
                                        <p className="description"><a style={{color:"black"}} href='tel:0312416661'>+92-312416661</a></p>
                                        <p className="description"><a style={{color:"black"}} href='tel:0312416661'>+92-313416661</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon"><i className="opal-icon-point"></i></div>
                                    <div className="content" ><a style={{color:"black"}} href='https://www.google.com/maps/dir//yaseen+plaza+google+map/@33.5997269,73.0149933,18.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38df950ac89f39e7:0xcf15d4181f12aff8!2m2!1d73.015617!2d33.5994909?entry=ttu'>
                                        <span className="title text-uppercase">ADDRESS :</span>
                                        <p className="description">Office # 03 second floor Yaseen Plaza Jinnah Avenue</p>
                                        <p className="description">Blue Area, Islamabad</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon no-border">
                                    <div className="icon"><i className="opal-icon-envelope"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">E-MAIL :</span>
                                        <p className="description"><a style={{color:"black"}} href='contact@greenvistamurree.com'>contact@greenvistamurree.com</a></p>
                                        {/* <p className="description">info@maisonco.com</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="form-contact mb-5">
                       <ContactForm/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage
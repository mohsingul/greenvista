import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Heading from "../../common/heading/heading";

class GallerrySection extends Component {
    state = {
        isOpen: false
    }

    open(e, image) {
        e.preventDefault()
        this.image = image
        this.setState({isOpen: true})
    }

    render() {
        const {flexRow} = this.props;
        return (
            <>
                <Heading>Gallery</Heading>
                <div className="gallerry-wrap p-0">
                    <div className={`row${this.props.flexRow ? ' flex-row-reverse' : ''}`}>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/0.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/0.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/1.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/1.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/2.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/2.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/3.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/3.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/4.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/4.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/5.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/5.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/6.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/6.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className={`row${this.props.flexRow ? ' flex-row-reverse' : ''}`}>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/7.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/7.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/8.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/8.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/9.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/9.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/10.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/10.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/11.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/11.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/15.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/15.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/imagewebpss/building/17.jpg')}>
                                    <img className="img-fluid" src="/assets/imagewebpss/building/17.jpg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {
                    this.state.isOpen &&
                    <Lightbox onCloseRequest={() => this.setState({isOpen: false})} mainSrc={this.image}/>
                }
            </>
        )
    }
}

export default GallerrySection
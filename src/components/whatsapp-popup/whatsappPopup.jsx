import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './whatsappPopup.scss';

class WhatsAppPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    }

    render() {
        const { isVisible } = this.state;

        return (
            <div className={`whatsapp-popup ${isVisible ? 'visible' : ''}`}>
                {/* <a href="#" className="btn btn-outline-primary" onClick={(event) => { this.handleClick(event, 'availabilityDiv') }} role="button"> */}
                <a href="https://wa.me/+923134166661">
                    <span className="screen-reader-text">Whatsapp</span>
                    <img className="wa-img-fluid" src="/assets/images/WA.png" alt=""/>
                </a>
            </div>
        );
    }
}

export default WhatsAppPopup;

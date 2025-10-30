import React, { Component } from 'react';
import Slider from "react-slick";
import './slider.scss';


class CarouselPage1 extends Component {

    constructor(props) {
        super(props);
        this.data = [
            {
                image: `/assets/images/slider/slider1-ameneties/gym.jpg`,
                title: `Fitness Facility`,
                description: 'Located in the heart of hills, our fitness facility offers state-of-the-art equipment and a motivating atmosphere to help you achieve your fitness goals.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/security.jpg`,
                title: `24/7 Security Surveillance`,
                description: 'Ensuring your safety is our top priority. With round-the-clock surveillance, you can enjoy peace of mind knowing that our security team is always monitoring the premises.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/sona.jpg`,
                title: `Sauna`,
                description: ' Feel the stress of the day melt away as you envelop yourself in the comforting warmth of our sauna, or indulge in the purifying steam of our steam baths. Experience the cleansing power of heat as it soothes your muscles, detoxifies your body, and revitalizes your spirit. Immerse yourself in the serene ambiance and emerge feeling refreshed, renewed, and ready to embrace life\'s challenges with a renewed sense of vigor.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/laundary.jpg`,
                title: `Laundary Facility`,
                description: 'Convenience meets comfort with our on-site laundry facility. Say goodbye to laundry day stress and enjoy hassle-free access to clean clothes during your stay.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/swimmingpool.jpg`,
                title: `Swimming Pool`,
                description: 'Dive into relaxation at our indoor swimming pool. Whether you\'re seeking a refreshing dip or a leisurely swim, our pool offers the perfect retreat from the bustling city.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/food.jpg`,
                title: `Food Court`,
                description: 'Satisfy your cravings at our vibrant food court. Featuring a variety of culinary delights, you\'ll discover an array of dining options to tantalize your taste buds.',
                link: '#'
            },
          
            {
                image: `/assets/images/slider/slider1-ameneties/spa.jpg`,
                title: `Spa Facility`,
                description: 'Indulge in ultimate relaxation at our luxurious spa facility. From rejuvenating massages to pampering treatments, immerse yourself in a world of serenity and bliss.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/vallet.jpg`,
                title: `Valet Parking`,
                description: 'Experience seamless arrivals and departures with our valet parking service. Let our dedicated team take care of your vehicle while you focus on enjoying your stay.',
                link: '#'
            },
            {
                image: `/assets/images/slider/slider1-ameneties/mosque.jpg`,
                title: `Mosque`,
                description: 'From the peaceful ambiance to convenient access, our mosque provides a haven for spiritual connection. Leave your worries at the door as our attentive staff ensures your comfort, allowing you to fully immerse yourself in moments of devotion and peace.',
                link: '#'
            }
        ]

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);


        this.state = {
            active: this.data[0]
        }
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    slideChange = (old, index) => {
        this.setState({
            active: this.data[index]
        })
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className={'carousel1-wrap position-relative'}>
                <Slider ref={slide => (this.slider = slide)} {...settings} beforeChange={this.slideChange}>
                    {this.data.map((data, index) =>
                        <div className="slider-item" key={index}>
                            <img src={data.image} alt="" />
                        </div>
                    )}
                </Slider>
                <div className="slider-content d-flex justify-content-end align-items-end flex-wrap">
                    <div className="navigation">
                        <button className="arrow-button arrow-prev" onClick={this.previous}>
                            Previous
                        </button>
                        <button className="arrow-button arrow-next" onClick={this.next}>
                            Next
                        </button>
                    </div>
                    <div className="slider-contentn" style={{ opacity: 0.9 }}>
                        <div className="slider-info mt-auto">
                            <h4 className="text-white text-uppercase mb-4">{this.state.active.title}</h4>
                            <p className="text-white">{this.state.active.description}</p>
                            <a className="btn btn-link p-0">explore</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselPage1
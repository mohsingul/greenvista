// import React, {Component} from 'react';
// import './explore-amenities.scss';

// class ExploreAmenitiesSection extends Component {
//     render (){
//         return (
//             <div className="amenities-general amenities-bg">
//                 <div className="row">
//                     <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
//                         <div className="w-lg-75 mx-auto">
//                             <h3 className="text-uppercase text-primary">Plan Your Stay</h3>
//                             <h2 className="text-uppercase mb-4">Explore Our Amenities</h2>
//                             <p className="pb-4">Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>
//                             <a href="#" className="btn btn-outline-primary" role="button">Explore our Amenities</a>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
//                         <img className="img-fluid" src="/assets/imagewebpss/home-3/explore-amenities.webp" alt=""/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ExploreAmenitiesSection
import React, { Component } from 'react';
import './explore-amenities.scss';

class ExploreAmenitiesSection extends Component {
    handleClick = (event,whereToGo) => {
        event.preventDefault()
        var element = document.getElementById(whereToGo);
        debugger;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    render() {
        return (
            <div className="amenities-general amenities-bg" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(/assets/images/explore-bg.jpg)'}}>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
                        <div className="w-lg-75 mx-auto">
                            <h3 className="text-uppercase text-white text-primary">Plan Your Visit</h3>
                            <h2 className="text-uppercase text-white mb-4">Explore Our Location</h2>
                            <p className="pb-4 text-white">Our location is a serene sanctuary, providing a tranquil retreat for those seeking refuge from the city's commotion. Conveniently positioned just <strong className='text-white'>45 kilometers</strong> from Islamabad, our community enjoys easy access to<ul> <li>Chayee Khana</li><li>Gloria Jeans</li> <li> Habibi Restaurant</li><li> Second Cup</li></ul> which is <strong className='text-white'><span style={{fontSize:'24px',color:'#cabe9f'}}>0 km away</span></strong> , ensuring a harmonious blend of convenience and tranquility. Experience the beauty of nature and the comforts of modern living at Green Vista, where serenity meets accessibility.</p>
                            <a href="#" className="btn btn-outline-primary" onClick={(event)=>{this.handleClick(event,'amenitiesDiv')}} role="button">Explore our Amenities</a>
                           <br/>
                           <br/>
                            <a href="#" className="btn btn-outline-primary" onClick={(event)=>{this.handleClick(event,'availabilityDiv')}} role="button">View Avalability</a>
                            <br/>
                           <br/>
                           
                            <a href="/apartments" className="btn btn-outline-primary"  role="button">View Appartments</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3312.5459379052363!2d73.43079999999999!3d33.875591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUyJzMyLjEiTiA3M8KwMjUnNTAuOSJF!5e0!3m2!1sen!2s!4v1709549369201!5m2!1sen!2s&zoom=50"
                            width="570px"
                            height="840px"
                            style={{ border: 0 }}
                            allowfullscreen="true"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ExploreAmenitiesSection
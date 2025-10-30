import React, {Component} from 'react';
import Heading from "../../common/heading/heading";

class OverviewFluidSection extends Component {
    render (){
        return (
            <div className="container-fluid px-md-4">
                <div className="row mx-lg-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="w-lg-75 mx-auto">
                            <Heading>THE PROJECT OVERVIEW</Heading>
                            <p className="text-black mt-5">Introducing MaisonCo, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</p>
                            <p className="mt-4">SWith it's exquisite location next to the most popular cafés on Murree Expressway with
panoramic views of the Kashmir Mountains across a lush green valley, Green Vista offers
some of the most luxurious residential apartments for their esteemed clients in the Murree
Hills. Offering beautifully designed 1 bed and 2 bed apartments alongside a multitude of
services. Our commercial offerings provide a golden opportunity to grow your business in a
scenic location just an hour from Islamabad. .</p>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebpss/home-2/h2_banner-1.webp" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewFluidSection
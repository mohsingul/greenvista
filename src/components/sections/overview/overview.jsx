import React, {Component} from 'react';
import Heading from "../../common/heading/heading";

class OverviewSection extends Component {
    render (){
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                        <Heading>THE PROJECT OVERVIEW</Heading>
                        <p className="text-black">
                        Introducing "Green Vista," an oasis of serenity nestled within the tranquil hills of Murree, Pakistan. Offering a harmonious blend of natural beauty and modern comfort, Green Vista invites you to experience the epitome of hillside living.
                        </p>
                        <p>
                        With it's exquisite location next to the most popular cafés on Murree Expressway with
panoramic views of the Kashmir Mountains across a lush green valley, Green Vista offers
some of the most luxurious residential apartments for their esteemed clients in the Murree
Hills. Offering beautifully designed 1 bed and 2 bed apartments alongside a multitude of
services. Our commercial offerings provide a golden opportunity to grow your business in a
scenic location just an hour from Islamabad. 
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="/assets/images/buildingoverview.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewSection
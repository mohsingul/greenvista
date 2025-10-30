import React, {Component} from 'react';
import Heading from "../../common/heading/heading";
import OurTeamBlock from "../../common/our-team/our-team";

class OurTeamSection extends Component {
    render (){
        return (
            <div className="ourteam">
                <div className="container">
                    <Heading>OUR TEAM</Heading>
                    <div className="row no-gutters">
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebpss/about/team_3.jpg" name={`Muhammad Huzaifa`} job={`Cheif Executive Officer`} special={true} position={`top`}>
                            As the captain of the ship, your leadership sets the tone for the entire organization. Trust in your team fosters a culture of collaboration, innovation, and success. 
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebpss/about/team_2.jpg" name={`Ubaid-ur-Rehman`} job={`Chief Operating Officer`} position={`bottom`}>
                            Driving operational excellence to propel our mission forward.
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebpss/about/team_1.png" name={`Syed Raffay Muzamil`} job={`CFO (Deputy Director)`} position={`top`}>
                            Strategizing financial growth for sustained success.
                            </OurTeamBlock>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebpss/about/team_4.webp" name={`JOSIE MAXWELL`} job={`PROJECT COORDINATOR`} position={`bottom`}>
                                You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of
                            </OurTeamBlock>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeamSection
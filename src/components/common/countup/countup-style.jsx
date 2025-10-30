import React, { Component } from 'react';
import CountUp from 'react-countup';
import './countup.scss';
class CounterBlockStyle extends Component {
    render() {
        return (
            <div className={`countup-wrap style`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={178900} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>SQUARE AREAS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={122} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>CAR PARKING</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <CountUp start={0} end={85} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>APARTMENTS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <CountUp start={0} end={120} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>ROOMS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterBlockStyle
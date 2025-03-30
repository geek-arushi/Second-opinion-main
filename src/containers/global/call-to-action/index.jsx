import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <div
            className="divider-area bgcolor-theme bg-img"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/shape/01.jpg)`,
            }}
        >
            <div className="container">
                <div className="row content-align-center">
                    <div className="col-lg-12">
                        <div
                            className="divider-content-area divider-content-style1"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="content-inner">
                                <h2>
                                    Ready to <span>Get Started?</span>
                                </h2>
                                <p>
                                    Connect with US experts now and receive the
                                    best medical opinions for your condition.
                                </p>
                            </div>
                            <a
                                href="https://secopp.jotform.com/app/242645877128972"
                                className="btn btn-theme btn-white custom-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sign Up Today
                            </a>
                            <Link
                                to="contact/"
                                className="btn btn-theme btn-white custom-btn"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;

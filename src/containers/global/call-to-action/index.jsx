import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
    const handleSignUpClick = () => {
        window.open(
            "https://app.secopp.com/login/",
            "_blank",
            "noopener,noreferrer"
        );
    };

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
                            <button
                                className="btn btn-theme btn-white custom-btn"
                                onClick={handleSignUpClick}
                            >
                                Sign Up Today
                            </button>
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

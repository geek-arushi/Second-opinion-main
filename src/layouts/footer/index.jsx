import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-content">
                    <div className="about-widget text-start">
                        <Logo
                            classOption="footer-logo"
                            image={`${process.env.PUBLIC_URL}/img/logo-dark.png`}
                        />
                        <p className="mb-0">
                            SECOPP connects patients in India with a trusted
                            network of top US medical professionals (cancer
                            specialists & orthopaedic surgeons) for valuable
                            second opinions.
                        </p>
                    </div>
                    <div className="widget-tas text-start">
                        <h4 className="useful-links-title">Useful Links</h4>
                        <div className="links-container">
                            <ul className="useful-links text-start">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="service/">Services</Link>
                                </li>
                                <li>
                                    <Link to="/blog & News">Blog & News</Link>
                                </li>
                                <li>
                                    <Link to="/howitwork">How it works</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/privacypolicy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms&conditions">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-social-icons text-start">
                        <p>
                            <span className="font-weight-bold,color">
                                Follow Us
                            </span>
                        </p>
                        <p className="follow-us-text">
                            Don&apos;t miss our future updates! Follow Us Today!
                        </p>
                        <div className="social-icons">
                            <SocialIcon
                                path="https://www.facebook.com/profile.php?id=61573080015519"
                                icon="icofont-facebook"
                            />
                            <SocialIcon
                                path="https://www.instagram.com/secopp_com"
                                icon="icofont-instagram"
                            />
                            <SocialIcon
                                path="https://x.com/SecOpp_Com"
                                icon="icofont-twitter"
                            />
                            <SocialIcon
                                path="https://www.linkedin.com/company/104032006/admin/dashboard/"
                                icon="icofont-linkedin"
                            />
                            <SocialIcon
                                path="https://www.youtube.com/@SecOppOfficial"
                                icon="icofont-youtube"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="widget-copyright text-start">
                                <p>
                                    @ 2025{" "}
                                    <span className="text-uppercase">
                                        Secopp
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

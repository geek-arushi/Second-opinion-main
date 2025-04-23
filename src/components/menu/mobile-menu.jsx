import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../logo";

const MobileMenu = ({ show, onClose }) => {
    return (
        <div className={`offcanvas-mobile-menu ${show ? "active" : ""}`}>
            <div
                className="mobile-menu-overlay"
                onClick={onClose}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        onClose();
                    }
                }}
                role="button"
                tabIndex={0}
            ></div>
            <div className="inner">
                <div className="mobile-header">
                    <button className="mobile-close-btn" onClick={onClose}>
                        <span></span>
                    </button>
                </div>
                <div className="menu-content">
                    <nav className="offcanvas-navigation">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default MobileMenu;

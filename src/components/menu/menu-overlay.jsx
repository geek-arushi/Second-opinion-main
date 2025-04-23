import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
                aria-label="Close menu"
            ></div>
            <div className="inner">
                <div className="mobile-header">
                    <button
                        className="mobile-close-btn"
                        onClick={onClose}
                        aria-label="Close menu"
                        title="Close"
                    >
                        <span></span>
                    </button>
                </div>
                <div className="menu-content">
                    <nav
                        className="offcanvas-navigation"
                        aria-label="Mobile Navigation"
                    >
                        <ul>
                            <li>
                                <Link to="/" onClick={onClose}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/service" onClick={onClose}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog & News" onClick={onClose}>
                                    Blog & News
                                </Link>
                            </li>
                            <li>
                                <Link to="/howitwork" onClick={onClose}>
                                    How it works
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" onClick={onClose}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" onClick={onClose}>
                                    FAQ
                                </Link>
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

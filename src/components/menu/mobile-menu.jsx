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
                aria-label="Close mobile menu"
                title="Close"
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
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default MobileMenu;

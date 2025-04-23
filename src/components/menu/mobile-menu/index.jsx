import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        e.preventDefault(); // Prevent default behavior
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            if (!parent) return;

            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);

            // Close other open menus
            parentSiblings.forEach((sibling) => {
                const submenu = sibling.querySelector("ul");
                if (submenu) {
                    slideUp(submenu, 300);
                }
            });

            // Toggle current menu
            const submenu = parent.querySelector("ul");
            if (submenu) {
                slideToggle(submenu, 300);
            }
        }
    };

    return (
        <div
            className={`offcanvas offcanvas-mobile-menu ${
                show ? "offcanvas-open" : ""
            }`}
        >
            <div className="inner">
                <div className="border-bottom mb-3 pb-3 text-end">
                    <button className="offcanvas-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <nav className="offcanvas-menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                            <span
                                className="menu-expand"
                                role="button"
                                tabIndex="0"
                                onClick={onClickHandler}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        onClickHandler(e);
                                    }
                                }}
                            >
                                <i className="icon"></i>
                            </span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/service">Services</NavLink>
                            <span
                                className="menu-expand"
                                role="button"
                                tabIndex="0"
                                onClick={onClickHandler}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        onClickHandler(e);
                                    }
                                }}
                            >
                                <i className="icon"></i>
                            </span>
                            <ul className="offcanvas-submenu">
                                <li>
                                    <NavLink to="/cancer">Cancer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/orthopedics">
                                        Orthopedics
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/blog-news">Blog & News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/how-it-works">How it Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">FAQ</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;

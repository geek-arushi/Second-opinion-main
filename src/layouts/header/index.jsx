import { useEffect, useState } from "react";
import Button from "../../components/button";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import MenuOverlay from "../../components/menu/menu-overlay";

const Header = () => {
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(null);

    const openMobileMenu = () => setOffcanvasShow(true);
    const closeMobileMenu = () => setOffcanvasShow(false);

    useEffect(() => {
        const header = document.querySelector(".sticky-header");
        if (header) {
            setHeaderTop(header.offsetTop);
        }

        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="header">
                {/* Top - Mobile View */}
                <div className="header-middle mobile-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="header-logo">
                                    <Logo
                                        image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                    />
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <Button
                                    path="https://app.secopp.com/login/"
                                    classOption="book-now-btn d-none d-sm-inline-block d-lg-none"
                                    text="LogIn / SignUp"
                                />
                                <div className="mobile-menu-toggle d-lg-none">
                                    <button
                                        onClick={openMobileMenu}
                                        className="offcanvas-toggle"
                                        aria-label="Toggle Mobile Menu"
                                        aria-expanded={offcanvasShow}
                                        type="button"
                                    >
                                        <svg
                                            viewBox="0 0 800 600"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"
                                            />
                                            <path
                                                d="M300,320 L540,320"
                                                id="middle"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom - Desktop View */}
                <div className="header-bottom d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <MainMenu classOption="small-menu" />
                                    <Button
                                        path="https://app.secopp.com/login/"
                                        classOption="book-now-btn"
                                        text="LogIn / SignUp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Header */}
                <div
                    className={`header-bottom sticky-header d-none d-lg-block ${
                        headerTop !== null && scroll > headerTop ? "sticky" : ""
                    }`}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-top justify-content-between">
                                    <div className="header-logo2">
                                        <Logo
                                            image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                        />
                                    </div>
                                    <MainMenu classOption="small-menu" />
                                    <Button
                                        path="https://app.secopp.com/login/"
                                        classOption="book-now-btn"
                                        text="LogIn / SignUp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {offcanvasShow && (
                <MenuOverlay show={offcanvasShow} onClose={closeMobileMenu} />
            )}
        </>
    );
};

export default Header;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/index";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "./assets/css/icofont.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/css/animate.css";
import "lightgallery.js/dist/css/lightgallery.css";
import "swiper/components/pagination/pagination.scss";
import FloatingWhatsApp from "./containers/whatsapp";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import BlogPage from "./pages/blog";
import BlogDetailsPage from "./templates/blog-details";
import BlogCategory from "./templates/blog-category";
import BlogTag from "./templates/blog-tag";
import BlogDate from "./templates/blog-date";
import BlogAuthor from "./templates/blog-author";
import ContactPage from "./pages/contact";
import NavScrollTop from "./components/nav-scroll-top";
import faq from "./pages/faq";
import Howitworkpage from "./pages/howitwork";
import cancer from "./pages/cancer";
import Orthopedics from "./pages/Orthopedics";
import medical from "./pages/blog2";
import Blogdetail2 from "./containers/blogdetail2";
import Privacypolicy from "./pages/privacypolicy";
import TermsAndConditions from "./pages/termscondition";
const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();
    }, []);
    return (
        <Router>
            <NavScrollTop>
                <Switch>
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/howitwork"}`}
                        component={Howitworkpage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/service"}`}
                        component={ServicePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/cancer"}`}
                        component={cancer}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/orthopedics"}`}
                        component={Orthopedics}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog"}`}
                        component={BlogPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                        component={BlogCategory}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
                        component={BlogTag}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                        component={BlogDate}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                        component={BlogAuthor}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
                        component={BlogDetailsPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={ContactPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/faq"}`}
                        component={faq}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog & News"}`}
                        component={medical}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blogdetail"}`}
                        component={Blogdetail2}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/privacypolicy"}`}
                        component={Privacypolicy}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/terms&conditions"}`}
                        component={TermsAndConditions}
                    />
                </Switch>
            </NavScrollTop>
            <FloatingWhatsApp />
        </Router>
    );
};

export default App;

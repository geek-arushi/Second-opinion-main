import { motion } from "framer-motion";
import SectionTitle from "../../../components/section-title";

const Whychooseus = () => {
    return (
        <div className="team-area team-default-area bg-gray py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <SectionTitle
                            classOption="text-center"
                            subTitle=""
                            title="<span>WHY CHOOSE US ?</span>"
                        />

                        {/* Motion div for sliding animation */}
                        <motion.div
                            className="d-flex justify-content-center align-items-center gap-5 flex-wrap"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/photos/h4.png"
                                }
                                alt="Feature 1"
                                className="img-fluid"
                                style={{
                                    width: "350px",
                                    height: "350px",
                                    objectFit: "contain",
                                }}
                                whileHover={{ scale: 1.1 }}
                            />
                            <motion.img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/photos/h5.png"
                                }
                                alt="Feature 2"
                                className="img-fluid"
                                style={{
                                    width: "350px",
                                    height: "350px",
                                    objectFit: "contain",
                                }}
                                whileHover={{ scale: 1.1 }}
                            />
                            <motion.img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/photos/h6.png"
                                }
                                alt="Feature 3"
                                className="img-fluid"
                                style={{
                                    width: "350px",
                                    height: "350px",
                                    objectFit: "contain",
                                }}
                                whileHover={{ scale: 1.1 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whychooseus;

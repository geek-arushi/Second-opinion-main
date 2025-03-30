import { motion } from "framer-motion";
import SectionTitle from "../../../components/section-title";

const Howitwork = () => {
    return (
        <div className="team-area team-default-area bg-gray py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <SectionTitle
                            classOption="text-center"
                            subTitle=""
                            title="<span>HOW IT WORKS!</span>"
                            text="Quick • Simple • Impactful"
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
                                    "/img/photos/h1.png"
                                }
                                alt="Step 1"
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
                                    "/img/photos/h2.png"
                                }
                                alt="Step 2"
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
                                    "/img/photos/h3.png"
                                }
                                alt="Step 3"
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

export default Howitwork;

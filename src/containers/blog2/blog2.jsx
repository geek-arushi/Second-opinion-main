import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaComment, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MedicalArticles = () => {
    return (
        <div className="container my-5">
            {/* Latest From Cancer (Oncology) Section */}
            <section className="mb-5">
                <h2 className="h4 font-weight-bold mb-4">
                    Latest From Cancer (Oncology)
                </h2>
                <div className="row">
                    {/* Article 1 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog1.html"
                            className="text-decoration-none text-dark"
                        >
                            <Link to="/blogdetail">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src="https://storage.googleapis.com/a1aa/image/7sBt2mfp1sS8a4jitnyiutJxB89hMQdaU6pTvfaIq0Y.jpg"
                                        className="card-img-top"
                                        alt="Bladder Cancer illustration"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            What is Bladder Cancer?
                                        </h5>
                                        <p className="card-text text-muted">
                                            Cancer | Urinary System
                                        </p>
                                        <div className="d-flex align-items-center text-muted">
                                            <FaComment className="mr-2" /> 0
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </a>
                    </div>
                    {/* Article 2 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog2.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/j8DGEOZtdFrJ0j_Bm7K6AhVUZlAxmhJQMKOI9et_kPM.jpg"
                                    className="card-img-top"
                                    alt="Carcinomas illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What are Carcinomas of unknown...
                                    </h5>
                                    <p className="card-text text-muted">
                                        Cancer | Other
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 3 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog3.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/GfuGlR6wTEF5OmLswcnnfVgX1ryWYT4qorWmT5hyyrs.jpg"
                                    className="card-img-top"
                                    alt="Oral and oropharyngeal cancer illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Oral and oropharyngeal...
                                    </h5>
                                    <p className="card-text text-muted">
                                        Cancer | Head and Neck
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 4 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog4.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/FFmbKz88nLFoRnnjIxFSNL3tE3dZbugWorYmGXktxgk.jpg"
                                    className="card-img-top"
                                    alt="Osteosarcoma illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Osteosarcoma?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Cancer | Musculoskeletal system
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 5 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog5.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/XOwI8E-2eXcM9-t8_Ayg4_Pknv7B8lkKxEE8cZtpZh8.jpg"
                                    className="card-img-top"
                                    alt="Prostate illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Prostate?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Cancer | Male Reproductive System
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 6 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog6.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/Rx45iWV2Ql0o0gEnNwsJkbfbshJP2MIKRJAMgVRNosI.jpg"
                                    className="card-img-top"
                                    alt="Small Cell Lung Cancer illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Small Cell Lung...
                                    </h5>
                                    <p className="card-text text-muted">
                                        Cancer | Lung and Respiratory System
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                    <button
                        className="btn btn-primary"
                        style={{ backgroundColor: "#00213e" }}
                    >
                        Know More <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </section>
            {/* Latest From Orthopedics Section */}
            <section>
                <h2 className="h4 font-weight-bold mb-4">
                    Latest From Orthopedics
                </h2>
                <div className="row">
                    {/* Article 1 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog7.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/ukJQmLHbyRi1dnLhXSHvLs8e57mGrgWyOossFa79vUE.jpg"
                                    className="card-img-top"
                                    alt="Achilles Tendon illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is an Achilles Tendon...
                                    </h5>
                                    <p className="card-text text-muted">
                                        Achilles Tendon Rupture | Orthopedic
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 2 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog8.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/LbiBjsP2vso-d13VII738GV9W4QzBSTn3fmXiJl9QlI.jpg"
                                    className="card-img-top"
                                    alt="Bunionette Arthritis illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Bunionette Arthritis?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Bunionette Deformity
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 3 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog9.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/aBpojX4_-ET6eg6T7_Gh8KQV_dymQ86jYMLTSHVyrZg.jpg"
                                    className="card-img-top"
                                    alt="Ankle Arthritis illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Ankle Arthritis?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Ankle Arthritis | Orthopedic
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 4 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog10.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/yEB-ffgYgNlIKW46VP07IWozYS4mr_XgWcORPmV3geE.jpg"
                                    className="card-img-top"
                                    alt="Calcaneus Fracture illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Calcaneus Fracture?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Calcaneus Fracture | Orthopedic
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 5 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog11.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/QnAZ-kdhhQTOYrUCpUqSsyZefC6pPBP0CpPFsb8onbw.jpg"
                                    className="card-img-top"
                                    alt="ACL Tear illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is an ACL Tear?
                                    </h5>
                                    <p className="card-text text-muted">
                                        ACL Tear | Orthopedic
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Article 6 */}
                    <div className="col-md-4 mb-4">
                        <a
                            href="blog12.html"
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/mX1pexf8F_1tB2TvLn4jw7u5NvCkMcmnuOO-XemEv90.jpg"
                                    className="card-img-top"
                                    alt="Acetabular Fracture illustration"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        What is Acetabular Fracture?
                                    </h5>
                                    <p className="card-text text-muted">
                                        Acetabular Fracture | Orthopedic
                                    </p>
                                    <div className="d-flex align-items-center text-muted">
                                        <FaComment className="mr-2" /> 0
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="d-flex justify-content-start mt-4">
                    <button
                        className="btn btn-primary"
                        style={{ backgroundColor: "#00213e" }}
                    >
                        Know More <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MedicalArticles;

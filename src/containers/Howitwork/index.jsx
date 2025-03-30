import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Howitworkp = () => (
    <div className="container py-5 text-black align-content-center">
        <p className="lead mb-4">
            The following steps will guide you in completing your SECOPP case
            creation by providing all your relevant medical information and
            details. If you have any questions at any time, please text our
            dedicated care coordinators via WhatsApp at
            <a className="text-primary" href="tel:9824112118">
                {" "}
                98241-12118
            </a>{" "}
            or email us at
            <a className="text-primary" href="mailto:admin@secopp.com">
                {" "}
                admin@secopp.com
            </a>
            .
        </p>

        {/** Section 1 **/}
        <div className="mb-5 p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold">Create an Account</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ul className="text-black">
                        <li>
                            In this step, you will{" "}
                            <strong>create an account</strong>. Your{" "}
                            <strong>email address and password</strong> will be
                            used to log in and access your files and second
                            opinion cases.
                        </li>
                        <li>
                            Ensure that your{" "}
                            <strong>email and cell number are valid</strong> to
                            receive an OTP for verification.
                        </li>
                        <li>
                            <strong>Create a password</strong> and save it for
                            future reference.
                        </li>
                        <li>
                            Please agree to the <strong>Terms of Use</strong>{" "}
                            and <strong>Privacy Policy</strong> to proceed.
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/1.png"}
                        alt="A woman creating an account on her laptop"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
            </div>
        </div>

        {/** Section 2 **/}
        <div className="mb-5 p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold">
                Start Your Second Opinion Case
            </h2>
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/2.png"}
                        alt="A person uploading documents to a cloud service"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
                <div className="col-md-6">
                    <ul className="text-black">
                        <li>
                            Fill out the patient intake form and{" "}
                            <strong>upload your medical documents</strong>.
                        </li>
                        <li>
                            Choose between a <strong>written report</strong> or
                            a <strong>video consultation</strong>.
                        </li>
                        <li>
                            Ensure all medical documents are{" "}
                            <strong>uploaded correctly</strong>.
                        </li>
                        <li>
                            Contact our care coordinators if you encounter any
                            issues.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/** Section 3 **/}
        <div className="p-4 bg-light rounded text-black">
            <h2 className="h4 font-weight-bold">Get Your Second Opinion</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <ul className="text-black">
                        <li>
                            Your case will be reviewed by our doctors, and if
                            needed, we will request additional information.
                        </li>
                        <li>
                            <strong>Video Consultation</strong>: A care
                            coordinator will schedule your consultation.
                        </li>
                        <li>
                            <strong>Written Consultation</strong>: A report
                            including your diagnosis and treatment plan will be
                            provided.
                        </li>
                        <li>
                            Your second opinion report will be{" "}
                            <strong>available for download</strong> in your
                            portal.
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={process.env.PUBLIC_URL + "/img/photos/3.png"}
                        alt="A doctor reviewing medical documents on a laptop"
                        className="img-fluid rounded shadow-sm w-100"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Howitworkp;

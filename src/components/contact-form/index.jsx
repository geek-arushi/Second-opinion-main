import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxu13P162301hNeH0Ozdy-pS2WneF2maCwv9MoRqH9NLOUxxo-7qCplNaZjVQT4CbQk0Q/exec", // <-- your deployed Apps Script Web App URL here
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(data).toString(),
                }
            );
            alert("Your message was successfully sent!");
        } catch (error) {
            console.error("Error:", error);
            alert("There was a problem sending your message.");
        }
    };

    return (
        <form
            className="contact-form-wrapper"
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="FirstName"
                            placeholder="First Name"
                            {...register("FirstName", { required: "First Name is required" })}
                        />
                        {errors.FirstName && <p>{errors.FirstName.message}</p>}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="Lastname"
                            placeholder="Last Name"
                            {...register("Lastname", { required: "Last Name is required" })}
                        />
                        {errors.Lastname && <p>{errors.Lastname.message}</p>}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                            {...register("Email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.Email && <p>{errors.Email.message}</p>}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="Phone"
                            placeholder="Phone Number"
                            {...register("Phone", { required: "Phone is required" })}
                        />
                        {errors.Phone && <p>{errors.Phone.message}</p>}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                            {...register("Subject", { required: "Subject is required" })}
                        />
                        {errors.Subject && <p>{errors.Subject.message}</p>}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group mb-0">
                        <textarea
                            className="form-control"
                            name="Helpyou"
                            rows="5"
                            placeholder="How can we help you?"
                            {...register("Helpyou", { required: "Message is required" })}
                        ></textarea>
                        {errors.Helpyou && <p>{errors.Helpyou.message}</p>}
                    </div>
                </div>

                <div className="col-md-12 text-center">
                    <div className="form-group mb-0">
                        <button
                            className="btn btn-theme btn-block"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

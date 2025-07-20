import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ContactForm = () => {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const publicKey = "OOCkEJ3zCO0Vo3_78";
        const serviceId = "service_kozqysm";
        const templateID = "template_frtmrk8";

        emailjs
            .sendForm(serviceId, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(() => {
                setMessageStatus("✅ Your message was sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                setMessageStatus("❌ Failed to send message. Please try again.");
                console.log('FAILED...', error.text);
            });
    };

    return (
        <form method="post" className="contact-validation-active" ref={form} onSubmit={sendEmail}>
            <div className="row align-items-center">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label>Name*</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            required />
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label>Message*</label>
                        <textarea
                            name="message"
                            className="form-control"
                            placeholder="Message"
                            required>
                        </textarea>
                    </div>
                </div>

                <div className="col-md-5 order-md-1 order-2 col-12">
                    <div className="submit-area">
                        <button type="submit" className="theme-btn">Submit now</button>
                        <div id="loader">
                            <i className="ti-reload"></i>
                        </div>
                        {/* ✅ Show status message here */}
                        {messageStatus && (
                            <p style={{ marginTop: '10px', color: messageStatus.includes('successfully') ? 'green' : 'red' }}>
                                {messageStatus}
                            </p>
                        )}
                    </div>
                </div>

                <div className="col-md-7 order-md-2 order-1 col-12">
                    <div className="contact-info">
                        <ul>
                            <li><i className="fi flaticon-phone-call"></i> +8824626379</li>
                            <li><i className="fi flaticon-mail"></i> pradeepsaini25604@mail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

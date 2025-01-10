import React, {useEffect, useState} from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import apiClient from "../API/apiClient";

function Contact() {
    const [contactdetails, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await apiClient.get("/contact/get-contacts"); // Use apiClient here
            setContacts(response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };
    return (
        <div className="contactSection">
            <div className="contactOverlay">
                <div className="contactContainer">
                    <div className="contactContent">
                        {/* Left Side: Contact Info */}
                        {contactdetails.map((contact) => (
                        <div className="contactInfo">
                            <h1 className="contactTitle">Contact Information</h1>
                            <p className="contactDescription">Feel free to reach out to us using the contact details or the form below.</p>
                            <div className="contactInfoCard">
                                <div className="contactInfoIcon">
                                    <FaLocationDot />
                                </div>
                                <div className="contactInfoDetails">
                                    <h3 className="contactInfoTitle">Address</h3>
                                    <p className="contactInfoText"><strong>{contact.address}</strong></p>
                                </div>
                            </div>
                            <div className="contactInfoCard">
                                <div className="contactInfoIcon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="contactInfoDetails">
                                    <h3 className="contactInfoTitle">Phone</h3>
                                    <p className="contactInfoText"><strong>{contact.phone}</strong></p>
                                </div>
                            </div>
                            <div className="contactInfoCard">
                                <div className="contactInfoIcon">
                                    <MdAlternateEmail />
                                </div>
                                <div className="contactInfoDetails">
                                    <h3 className="contactInfoTitle">Email</h3>
                                    <p className="contactInfoText"><strong>{contact.email}</strong></p>
                                </div>
                            </div>
                        </div>
                        ))}

                        {/* Right Side: Contact Form */}
                        <div className="contactForm">
                            <h1 className="contactFormTitle">Contact Us</h1>
                            <form className="contactFormFields">
                                <input type="text" placeholder="Your Name" required className="contactFormInput" />
                                <input type="email" placeholder="Your Email" required className="contactFormInput" />
                                <input type="text" placeholder="Subject" className="contactFormInput" />
                                <textarea placeholder="Message" rows="5" className="contactFormTextarea" required></textarea>
                                <button type="submit" className="contactFormButton">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

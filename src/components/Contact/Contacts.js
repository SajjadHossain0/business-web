import React, {useEffect, useState} from "react";
import "./Contacts.css";
import {FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function Contacts() {
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
        <>
            <Header/>
            <div className="contact-page-container">
                <header className="contact-header">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        We are here to assist you with any inquiries. Fill out the form below or contact us through the
                        details provided.
                    </p>
                </header>

                <div className="contact-content">
                    {/* Contact Form Section */}
                    <div className="contact-form-section">
                        <h2 className="form-title">Contact Form</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" className="form-input" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" id="subject" className="form-input" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" className="form-textarea"
                                          placeholder="Write your message"></textarea>
                            </div>
                            <button type="submit" className="form-submit-btn">Submit</button>
                        </form>
                    </div>

                    {/* Contact Details Section */}
                    {contactdetails.length > 0 ? (
                        contactdetails.map((contact) => (
                            <div className="contact-details-section">
                                <h2 className="details-title">Contact Information</h2>
                                <p className="details-item">
                                    <strong>Address:</strong> {contact.address}
                                </p>
                                <p className="details-item">
                                    <strong>Phone:</strong> <a href={`tel:${contact.phone}`}
                                                               className="details-link">{contact.phone}</a>
                                </p>
                                <p className="details-item">
                                    <strong>Email:</strong> <a href={`mailto:${contact.email}`}
                                                               className="details-link">{contact.email}</a>
                                </p>

                                <p className="details-item">
                                    <strong>Business Hours:</strong> {contact.businesshour}
                                </p>
                            </div>
                        ))
                    ):(
                            <div className="contact-details-section">
                                <h2 className="details-title">Contact Information</h2>
                                <p className="details-item">
                                    <strong>Address:</strong>
                                </p>
                                <p className="details-item">
                                    <strong>Phone:</strong> <a href=""
                                                               className="details-link"></a>
                                </p>
                                <p className="details-item">
                                    <strong>Email:</strong> <a href=""
                                                               className="details-link"></a>
                                </p>

                                <p className="details-item">
                                    <strong>Business Hours:</strong>
                                </p>
                            </div>
                    )}
                </div>

                {/* Map Section */}
                <div className="contact-map-section">
                    <h2 className="map-title">Our Location</h2>
                    <iframe
                        title="Google Map"
                        className="contact-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902736651487!2d90.41251821498183!3d23.750920894601154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d9c2d3a3b5%3A0x8dc56f7a38bc6859!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1694703915843!5m2!1sen!2sbd"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Social Media Section */}
                <div className="social-media-section">
                    <h2 className="social-title">Follow Us</h2>
                    {contactdetails.map((contact) => (
                        <div className="social-icons">
                            <a href={contact.facebooklink} target="_blank" rel="noopener noreferrer"
                               className="social-link">
                                <FaFacebook/>
                            </a>
                            <a href={contact.youtubelink} target="_blank" rel="noopener noreferrer"
                               className="social-link">
                                <FaYoutube/>
                            </a>
                            <a href={contact.linkedinlink} target="_blank" rel="noopener noreferrer"
                               className="social-link">
                                <FaLinkedin/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>

    );
}

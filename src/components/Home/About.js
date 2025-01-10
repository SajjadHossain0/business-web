import React, {useEffect, useState} from 'react';
import './About.css';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import apiClient from "../API/apiClient";

export default function About() {
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
        <div className="about-us-section">
            <div className="about-us-container">
                {/* Left Side: Title, Text, and Social Links */}
                <div className="about-us-left">
                    <div className="about-us-title">
                        <h1>About Us</h1>
                    </div>
                    <div className="about-us-text">
                        <p>
                            Welcome to <strong>GrowTech Solutions</strong>, your trusted partner in business and technological innovation.
                            With over a decade of experience, we specialize in providing top-notch business development and IT solutions to help
                            our clients achieve sustainable growth and success. Our mission is to empower businesses through innovative strategies,
                            cutting-edge technologies, and personalized services.
                        </p>
                        <p>
                            At GrowTech Solutions, we pride ourselves on our client-centric approach, ensuring that each solution is tailored to meet
                            the unique needs of your business. From crafting dynamic websites to implementing robust e-commerce systems, we deliver
                            excellence at every stage.
                        </p>
                    </div>

                        {contactdetails.map((contact) => (
                            <div className="about-us-social-links">
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

                {/* Right Side: Image */}
                <div className="about-us-right">
                    <img
                        className="about-us-image"
                        src="https://via.placeholder.com/600x400"
                        alt="Teamwork and Innovation"
                    />
                </div>
            </div>
        </div>
    );
}

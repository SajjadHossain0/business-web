import React from 'react';
import './About.css'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function About() {
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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        </p>
                    </div>
                    <div className="about-us-social-links">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaLinkedin /></a>
                        <a href=""><FaYoutube /></a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="about-us-right">
                    <img
                        className="about-us-image"
                        src="https://via.placeholder.com/600x400"
                        alt="Construction"
                    />
                </div>
            </div>
        </div>
    );
}

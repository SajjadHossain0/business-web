import React from "react";
import './OurMission.css';

export default function OurMission() {
    return (
        <section className="our-mission-container">
            <div className="mission-content">
                <div className="mission-text">
                    <h1>Our Mission</h1>
                    <p>
                        Our mission is to provide top-tier solutions tailored to the distinct requirements of each of our clients. We aim for excellence in every phase of our projects, ensuring adherence to global standards while offering innovative, sustainable, and efficient services in the fields of consulting, engineering, and construction.
                    </p>
                    <p>
                        We are dedicated to upholding values of integrity, professionalism, and customer satisfaction. Our goal is to foster long-term relationships by consistently delivering outstanding results that make a positive impact on every project we undertake.
                    </p>
                </div>

                <div className="mission-image">
                    <img
                        src="https://via.placeholder.com/500x300" // Replace with your image URL
                        alt="Our Mission"
                    />
                </div>
            </div>
        </section>
    );
}

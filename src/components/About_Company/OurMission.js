import React from "react";
import './OurMission.css';

export default function OurMission() {
    return (
        <section className="our-mission-container">
            <div className="mission-content">
                <div className="mission-text">
                    <h1>Our Mission</h1>
                    <p>
                        Our mission is to deliver high-quality solutions that meet the unique needs of each client.
                        We strive for excellence in every project, ensuring that we adhere to international standards
                        while providing innovative, sustainable, and efficient services in the construction and engineering
                        industry.
                    </p>
                    <p>
                        We are committed to integrity, professionalism, and customer satisfaction, aiming to build lasting
                        relationships through consistent delivery of exceptional results.
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

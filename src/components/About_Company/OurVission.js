import React from "react";
import './OurVission.css'

export default function OurVission() {
    return (
        <section className="our-vission-container">
            <div className="vission-content">
                <div className="vission-image">
                    <img
                        src="https://via.placeholder.com/500x300" // Replace with your image URL
                        alt="Our Vission"
                    />
                </div>
                <div className="vission-text">
                    <h1>Our Vission</h1>
                    <p>
                        Our vission is to deliver high-quality solutions that meet the unique needs of each client.
                        We strive for excellence in every project, ensuring that we adhere to international standards
                        while providing innovative, sustainable, and efficient services in the construction and
                        engineering
                        industry.
                    </p>
                    <p>
                        We are committed to integrity, professionalism, and customer satisfaction, aiming to build
                        lasting
                        relationships through consistent delivery of exceptional results.
                    </p>
                </div>
            </div>
        </section>

    );
}
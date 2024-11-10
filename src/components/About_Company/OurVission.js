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
                        Our vision is to be a leading provider of innovative and sustainable solutions in the
                        construction
                        and engineering sectors. We aim to be recognized for our commitment to quality, sustainability,
                        and client satisfaction.
                    </p>
                    <p>
                        We envision a future where our projects shape the world, creating lasting value through
                        cutting-edge technology
                        and unparalleled expertise.
                    </p>
                </div>
            </div>
        </section>

    );
}
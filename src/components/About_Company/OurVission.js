import React from "react";
import './OurVission.css';

export default function OurVission() {
    return (
        <section className="our-vission-container">
            <div className="vission-content">
                <div className="vission-image">
                    <img
                        src="https://via.placeholder.com/500x300" // Replace with your image URL
                        alt="Our Vision"
                    />
                </div>
                <div className="vission-text">
                    <h1>Our Vision</h1>
                    <p>
                        Our vision is to be a trusted leader in delivering innovative and sustainable solutions in the construction and engineering sectors. We are dedicated to being recognized for our excellence, commitment to quality, sustainability, and most importantly, client satisfaction.
                    </p>
                    <p>
                        We aspire to a future where our projects make a meaningful impact, shaping the world through groundbreaking technology and unmatched expertise. Our goal is to create lasting value with every endeavor.
                    </p>
                </div>
            </div>
        </section>
    );
}

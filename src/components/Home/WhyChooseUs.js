import React from "react";
import "./WhyChooseUs.css";
import { FaLaptopCode, FaLightbulb, FaUsers, FaHeadset, FaClock, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: <FaLaptopCode />,
            title: "Technical Expertise",
            description: "Over 10 years of experience in web development and modern frameworks."
        },
        {
            icon: <FaLightbulb />,
            title: "Innovative Solutions",
            description: "Creative problem-solving and unique solutions tailored to client needs."
        },
        {
            icon: <FaUsers />,
            title: "Client-Focused",
            description: "Your success is my priority, and I take time to understand your goals."
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            description: "Available to assist whenever you need, with quick response times."
        },
        {
            icon: <FaClock />,
            title: "Timely Delivery",
            description: "Projects are delivered on time without compromising on quality."
        },
        {
            icon: <FaDollarSign />,
            title: "Affordable Rates",
            description: "Professional services at competitive rates with transparency."
        }
    ];

    return (
        <div className="why-choose-me-section">
            <div className="why-choose-me-header">
                <h1>Why Choose Us?</h1>
                <p>Choosing the right developer makes all the difference. Here’s why I stand out:</p>
            </div>
            <div className="why-choose-me-cards">
                {reasons.map((reason, index) => (
                    <div className="why-choose-me-card" key={index}>
                        <div className="why-choose-me-icon">{reason.icon}</div>
                        <h5 className="why-choose-me-title">{reason.title}</h5>
                        <p className="why-choose-me-description">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

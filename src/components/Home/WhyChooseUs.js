import React from "react";
import "./WhyChooseUs.css";
import { FaLaptopCode, FaLightbulb, FaUsers, FaHeadset, FaClock, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: <FaLaptopCode />,
            title: "Technical Expertise",
            description: "Our team has extensive experience in modern technologies and frameworks, delivering reliable solutions for businesses.",
        },
        {
            icon: <FaLightbulb />,
            title: "Innovative Strategies",
            description: "We believe in thinking outside the box to provide creative and tailored solutions that meet unique client challenges.",
        },
        {
            icon: <FaUsers />,
            title: "Client-Centered Approach",
            description: "Your goals are our priority. We collaborate closely to ensure all solutions align with your vision and requirements.",
        },
        {
            icon: <FaHeadset />,
            title: "Dedicated Support",
            description: "We offer round-the-clock support, ensuring any issues are resolved promptly to keep your operations running smoothly.",
        },
        {
            icon: <FaClock />,
            title: "On-Time Delivery",
            description: "We value your time. Our team is committed to delivering projects within agreed deadlines without compromising quality.",
        },
        {
            icon: <FaDollarSign />,
            title: "Cost-Effective Solutions",
            description: "We provide high-quality services at competitive rates, ensuring excellent value for your investment.",
        },
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

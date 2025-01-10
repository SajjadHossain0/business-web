import React, {useEffect, useState} from "react";
import "./MajorClints.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function MajorClints() {
    const [clients, setClients] = useState([]);
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetchClients();
        fetchSuccessStories();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await apiClient.get("/major-client/get-all");
            setClients(response.data);
        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    };

    const fetchSuccessStories = async () => {
        try {
            const response = await apiClient.get("/success-story/get-all");
            setSuccessStories(response.data);
        } catch (error) {
            console.error("Error fetching success stories:", error);
        }
    };

    return (
        <>
            <Header/>
            <div className="major-clints-page">
                {/* Header */}
                <h1 className="major-clints-page-header">Major Clients</h1>

                {/* Client Logos Grid */}
                <div className="major-clints-logos-section">
                    <h2 className="major-clints-logos-title">Trusted by Industry Leaders</h2>
                    {clients.length > 0 ? (
                    <div className="major-clints-logos-grid">
                        {clients.map((client) => (
                        <div className="major-clints-logo-card">
                            <img src={`data:image/jpeg;base64,${client.image}`}
                                 alt={client.name}/>
                            <p className="major-clints-logo-name">{client.name}</p>
                            <span className="major-clints-logo-industry">Industry: {client.industryName}</span>
                        </div>
                        ))}
                    </div>
                    ) : (
                        <CustomLoading/>
                    )}
                </div>

                {/* Client Success Stories */}
                <div className="major-clints-success-section">
                    <h2 className="major-clints-success-title">Client Success Stories</h2>
                    {successStories.length > 0 ? (
                    <div className="major-clints-success-carousel">
                        {successStories.map((story) => (
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">{story.successName}</h3>
                            <p className="major-clints-story-description">
                                {story.successText}
                            </p>
                            <p className="major-clints-story-testimonial">
                                {story.successQuote}                            </p>
                        </div>
                        ))}
                    </div>
                    ) : (
                        <CustomLoading/>
                    )}
                </div>

                {/* Interactive World Map */}
                <div className="major-clints-map-section">
                    <h2 className="major-clints-map-title">Our Global Presence</h2>
                    <p className="major-clints-map-description">
                        Explore the locations where we've made an impact.
                    </p>
                    <div className="major-clints-map-placeholder">
                        {/* Replace with an actual interactive map if needed */}
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="Interactive World Map"
                        />
                    </div>
                </div>

                {/* Call to Action (CTA) */}
                <div className="major-clints-cta-section">
                    <h2 className="major-clints-cta-title">Join Our Esteemed Clients</h2>
                    <p className="major-clints-cta-description">
                        Want to see your name here? Contact us today for innovative solutions!
                    </p>
                    <button
                        className="major-clints-cta-button"
                        onClick={() => (window.location.href = "/contact-us")}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <Footer/>
        </>

    );
}
import React from "react";
import "./MajorClints.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MajorClints() {
    return (
        <>
            <Header/>
            <div className="major-clints-page">
                {/* Header */}
                <h1 className="major-clints-page-header">Major Clients</h1>

                {/* Client Logos Grid */}
                <div className="major-clints-logos-section">
                    <h2 className="major-clints-logos-title">Trusted by Industry Leaders</h2>
                    <div className="major-clints-logos-grid">
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 1"/>
                            <p className="major-clints-logo-name">ABC Corp</p>
                            <span className="major-clints-logo-industry">Industry: Tech</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 2"/>
                            <p className="major-clints-logo-name">XYZ Ltd</p>
                            <span className="major-clints-logo-industry">Industry: Construction</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 3"/>
                            <p className="major-clints-logo-name">DEF Co.</p>
                            <span className="major-clints-logo-industry">Industry: Retail</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 1"/>
                            <p className="major-clints-logo-name">ABC Corp</p>
                            <span className="major-clints-logo-industry">Industry: Tech</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 2"/>
                            <p className="major-clints-logo-name">XYZ Ltd</p>
                            <span className="major-clints-logo-industry">Industry: Construction</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 3"/>
                            <p className="major-clints-logo-name">DEF Co.</p>
                            <span className="major-clints-logo-industry">Industry: Retail</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 1"/>
                            <p className="major-clints-logo-name">ABC Corp</p>
                            <span className="major-clints-logo-industry">Industry: Tech</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 2"/>
                            <p className="major-clints-logo-name">XYZ Ltd</p>
                            <span className="major-clints-logo-industry">Industry: Construction</span>
                        </div>
                        <div className="major-clints-logo-card">
                            <img src="https://via.placeholder.com/150" alt="Client 3"/>
                            <p className="major-clints-logo-name">DEF Co.</p>
                            <span className="major-clints-logo-industry">Industry: Retail</span>
                        </div>
                    </div>
                </div>

                {/* Client Success Stories */}
                <div className="major-clints-success-section">
                    <h2 className="major-clints-success-title">Client Success Stories</h2>
                    <div className="major-clints-success-carousel">
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">ABC Corp</h3>
                            <p className="major-clints-story-description">
                                Developed a custom e-commerce solution that increased sales by 35%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "The team delivered beyond our expectations. Highly recommended!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">XYZ Ltd</h3>
                            <p className="major-clints-story-description">
                                Designed and implemented a construction management system,
                                improving efficiency by 40%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "Professional and on-point delivery every time!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">ABC Corp</h3>
                            <p className="major-clints-story-description">
                                Developed a custom e-commerce solution that increased sales by 35%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "The team delivered beyond our expectations. Highly recommended!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">XYZ Ltd</h3>
                            <p className="major-clints-story-description">
                                Designed and implemented a construction management system,
                                improving efficiency by 40%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "Professional and on-point delivery every time!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">ABC Corp</h3>
                            <p className="major-clints-story-description">
                                Developed a custom e-commerce solution that increased sales by 35%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "The team delivered beyond our expectations. Highly recommended!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">XYZ Ltd</h3>
                            <p className="major-clints-story-description">
                                Designed and implemented a construction management system,
                                improving efficiency by 40%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "Professional and on-point delivery every time!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">ABC Corp</h3>
                            <p className="major-clints-story-description">
                                Developed a custom e-commerce solution that increased sales by 35%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "The team delivered beyond our expectations. Highly recommended!"
                            </p>
                        </div>
                        <div className="major-clints-story-card">
                            <h3 className="major-clints-story-client">XYZ Ltd</h3>
                            <p className="major-clints-story-description">
                                Designed and implemented a construction management system,
                                improving efficiency by 40%.
                            </p>
                            <p className="major-clints-story-testimonial">
                                "Professional and on-point delivery every time!"
                            </p>
                        </div>
                    </div>
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
                        onClick={() => (window.location.href = "/contact")}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <Footer/>
        </>

    );
}
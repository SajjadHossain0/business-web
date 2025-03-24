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
            // Simulated demo data in case the backend is not available
            const demoClients = [
                {
                    name: "Tech Corp",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvddSa5Dj_PJVGaPsmFHUftoQSdUYJmUqkg&s",
                    industryName: "Technology",
                },
                {
                    name: "Green Energy Solutions",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNtRpGFcRNfmS2QiwvHxS0zTc_Tb6e1bioQ&s",
                    industryName: "Energy",
                },
                {
                    name: "FinancePro",
                    image: "https://c4.wallpaperflare.com/wallpaper/703/645/236/light-radiance-lines-waves-wallpaper-preview.jpg",
                    industryName: "Finance",
                },
            ];

            setClients(demoClients);
        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    };

    const fetchSuccessStories = async () => {
        try {
            // Simulated demo data in case the backend is not available
            const demoStories = [
                {
                    successName: "John Doe - CEO of Tech Corp",
                    successText: "We partnered with this company and saw a 40% increase in revenue.",
                    successQuote: "Their team provided excellent solutions that transformed our business!",
                },
                {
                    successName: "Sarah Lee - CFO of FinancePro",
                    successText: "With their innovative platform, our business operations became 2x more efficient.",
                    successQuote: "A game-changer for our industry!",
                },
            ];

            // Uncomment the API call when the backend is ready
            // const response = await apiClient.get("/success-story/get-all");
            // setSuccessStories(response.data);

            setSuccessStories(demoStories);
        } catch (error) {
            console.error("Error fetching success stories:", error);
        }
    };


    /*    useEffect(() => {
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
        };*/

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
                            {/*<img src={`data:image/jpeg;base64,${client.image}`}
                                 alt={client.name}/>*/}
                            <img src={client.image}
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
                    <div className="contact-map-section">
                        <iframe
                            title="Google Map"
                            className="contact-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902736651487!2d90.41251821498183!3d23.750920894601154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d9c2d3a3b5%3A0x8dc56f7a38bc6859!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1694703915843!5m2!1sen!2sbd"
                            allowFullScreen
                        ></iframe>
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
import React, {useEffect, useState} from 'react';
import './ClintThought.css'
import apiClient from "../API/apiClient";


export default function ClintThought() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await apiClient.get('/testimonials/get-all');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);
    return (
        <div>
            <div className="responsiveCardsImg">
                <section>
                    <div className="container">
                        <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}}>What Our Clients Think</h1>
                        <div className="cardsImg">
                            {testimonials.length > 0 ? (
                                testimonials.map((testimonial, i) => (
                                    <div key={i} className="card customCard">
                                        <div style={{margin: 10}}>
                                            {/* Display the image using Base64 or URL */}
                                            <img
                                                src={`data:image/jpeg;base64,${testimonial.image}`} // Assuming image is stored as Base64
                                                height="100"
                                                width="100"
                                                style={{
                                                    borderRadius: '50%',
                                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                                                }}
                                                alt={`Client ${testimonial.name}`}
                                            />
                                        </div>

                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.thought}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No testimonials available.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
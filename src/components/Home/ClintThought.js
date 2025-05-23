import React, {useEffect, useState} from 'react';
import './ClintThought.css'
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";


export default function ClintThought() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                // Simulate an API response when backend is not running
                const demoTestimonials = [
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s", // Replace with a real image URL
                        name: "John Doe",
                        thought: "Great experience! The service was fantastic and exceeded my expectations."
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s", // Replace with a real image URL
                        name: "Jane Smith",
                        thought: "Highly recommend! The team is professional and the product is top-notch."
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s", // Replace with a real image URL
                        name: "Alice Brown",
                        thought: "Amazing quality and customer support. Will definitely come back!"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s", // Replace with a real image URL
                        name: "Bob Johnson",
                        thought: "A wonderful experience overall. Very happy with the results."
                    },
                ];


                setTestimonials(demoTestimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

/*
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
*/

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
                                                //src={`data:image/jpeg;base64,${testimonial.image}`} // Assuming image is stored as Base64
                                                src={testimonial.image} // Assuming image is stored as Base64
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
                               <CustomLoading/>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
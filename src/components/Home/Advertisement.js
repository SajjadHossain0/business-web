import React, { useState, useEffect } from 'react';
import './Advertisement.css';
import CustomLoading from "../CustomLoading";

const Advertisement = ({ images, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide to the next image
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    // Manually go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))
                ):(
                    <div align="center">
                        <CustomLoading/>
                    </div>

                )}
            </div>

            {/* Navigation Dots */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Advertisement;

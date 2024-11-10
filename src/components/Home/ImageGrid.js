import React, { useState } from 'react';
import './ImageGrid.css';
import {FaArrowRight} from "react-icons/fa";

export default function ImageGrid(props) {
    const [images] = useState([
        {
            imageLink: "https://via.placeholder.com/500x500"
        },
        {
            imageLink: "https://via.placeholder.com/500x500"
        },
        {
            imageLink: "https://via.placeholder.com/500x500"
        }
    ]);

    const handleShowMore = () => {
        window.location.href = '/gallery';  // Redirects to the gallery page
    };

    return (
        <div className="image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="image-grid-title">Our Recent
                Projects</h1>
            <div className="image-grid">
                {images.slice(0, 4).map((image, index) => (
                    <div key={index} className="image-grid-item">
                        <img src={image.imageLink} alt={`Project ${index + 1}`} className="image-grid-photo"/>
                    </div>
                ))}
            </div>
            <hr></hr>
            <button className="image-grid-show-more" onClick={handleShowMore}>
                Show More <FaArrowRight/>
            </button>
            <hr></hr>
        </div>
    );
}

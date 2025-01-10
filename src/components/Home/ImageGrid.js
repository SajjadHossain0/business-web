import React, {useEffect, useState} from 'react';
import './ImageGrid.css';
import {FaArrowRight} from "react-icons/fa";
import apiClient from "../API/apiClient";

export default function ImageGrid(props) {
    const [galleryItems, setGalleryItems] = useState([]);

    // Fetch gallery items from the backend
    useEffect(() => {
        const fetchGalleryItems = async () => {
            try {
                const response = await apiClient.get("/gallery/get-all");
                setGalleryItems(response.data);
            } catch (error) {
                console.error("Error fetching gallery items:", error);
            }
        };

        fetchGalleryItems();
    }, []);

    const handleShowMore = () => {
        window.location.href = '/gallery';  // Redirects to the gallery page
    };

    return (
        <div className="image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="image-grid-title">Our Recent
                Projects</h1>
            <div className="image-grid">
                {galleryItems.slice(0, 4).map((image, index) => (
                    <div key={index} className="image-grid-item">
                        <img src={`data:image/jpeg;base64,${image.image}`}
                             alt={`Project ${index + 1}`} className="image-grid-photo"/>
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

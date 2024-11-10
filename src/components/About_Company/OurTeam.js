import React, {useState} from "react";
import './OurTeam.css'
import ImageCard from "./ImageCard";

export default function OurTeam() {

    const [images] = useState([
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            text: "Some text about them."
        },
    ]);

    return (
        <div className="ourTeam-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="ourTeam-image-grid-title">Our Team</h1>
            <div className="ourTeam-image-grid">
                {images.slice(0, 4).map((image, index) => (
                    <div key={index} className="ourTeam-image-grid-item">
                        <ImageCard
                            imageUrl={image.imageUrl}
                            title={image.title}
                            text={image.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
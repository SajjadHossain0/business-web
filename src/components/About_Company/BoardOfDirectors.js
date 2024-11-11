import React, {useState} from "react";
import ImageCard from "./ImageCard";
import './BoardOfDirectors.css'


export default function BoardOfDirectors() {

    const [images] = useState([
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            position: "position",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            position: "position",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            position: "position",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            position: "position",
            text: "Some text about them."
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
            position: "position",
            text: "Some text about them."
        },

    ]);

    return (
        <div className="bod-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="bod-image-grid-title">Board Of Directors</h1>
            <div className="bod-image-grid">
                {images.slice(0, 4).map((image, index) => (
                    <div key={index} className="bod-image-grid-item">
                        <ImageCard
                            imageUrl={image.imageUrl}
                            title={image.title}
                            position={image.position}
                            text={image.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
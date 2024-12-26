import React, {useState} from "react";
import './Gallery.css'

export default function Gallery() {

    const [images] = useState([
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
        {
            imageUrl: "https://via.placeholder.com/300x400",
            title: "Name",
        },
    ]);

    return (
        <div className="container">
            <h1 className="title" style={{ color: "#34495e", fontSize: 36, fontWeight: 700 }}>
                Our Story
            </h1>

            <div className="photo-gallery">
                {images.map((image, index) => (
                    <div key={index} className="photo">
                        <img src={image.imageUrl} alt={image.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
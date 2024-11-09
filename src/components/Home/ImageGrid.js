import React, { useState } from 'react';
import './ImageGrid.css';
import {FaArrowRight} from "react-icons/fa";

export default function ImageGrid(props) {
    const [images] = useState([
        {
            imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605",
        },
        {
            imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
        },
        {
            imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
        },
        {
            imageLink: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/325524570_717413916513866_6327740471467962226_n.jpg?stp=c0.70.635.635a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=yut5mPJtD6wQ7kNvgG5rEdh&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AXEZGk6baTYXlO7X86uJfUA&oh=00_AYDN4t83tBFeia30t1q9JwNAcpNCVuNiDHLNE3fpydRgOw&oe=67300605"
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

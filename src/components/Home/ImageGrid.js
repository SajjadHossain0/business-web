import React, {useEffect, useState} from 'react';
import './ImageGrid.css';
import {FaArrowRight} from "react-icons/fa";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";


export default function ImageGrid(props) {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        const fetchGalleryItems = async () => {
            try {
                // Simulate an API response when backend is not running
                const demoGalleryItems = [
                    { image: "https://static.vecteezy.com/system/resources/previews/001/576/507/non_2x/abstract-flat-solid-color-background-free-vector.jpg" },
                    { image: "https://media.istockphoto.com/id/1360396292/vector/modern-geometric-abstract-designseamless-repeat-pattern.jpg?s=612x612&w=0&k=20&c=LYgdgjUtSxK1y7ULYYySGcLBSz1kS3EDzTmZHnT6MpM=" },
                    { image: "https://cdn.pixabay.com/photo/2024/05/30/08/48/pattern-8798134_1280.png" },
                    { image: "https://t4.ftcdn.net/jpg/02/60/87/33/360_F_260873320_f7X4G2o05k3Wkz1GSOWUETlcMv5PgrZB.jpg" },
                ];

                setGalleryItems(demoGalleryItems);
            } catch (error) {
                console.error("Error fetching gallery items:", error);
            }
        };
        fetchGalleryItems();
    }, []);


    // Fetch gallery items from the backend
/*
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
*/

    const handleShowMore = () => {
        window.location.href = '/gallery';  // Redirects to the gallery page
    };

    return (
        <div className="image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="image-grid-title">Our Recent
                Projects</h1>
            <div className="image-grid">
                {galleryItems.length > 0 ? (
                    galleryItems.slice(0, 4).map((image, index) => (
                        <div key={index} className="image-grid-item">
                            {/*<img src={`data:image/jpeg;base64,${image.image}`}
                                 alt={`Project ${index + 1}`} className="image-grid-photo"/>*/}
                            <img src={image.image} alt={`Project ${index + 1}`} className="image-grid-photo"/>
                        </div>
                    ))
                ) : (
                    <CustomLoading type={"spin"} color={"gray"}/>
                )}

            </div>
            <hr></hr>
            <button className="image-grid-show-more" onClick={handleShowMore}>
                Show More <FaArrowRight/>
            </button>
            <hr></hr>
        </div>
    );
}

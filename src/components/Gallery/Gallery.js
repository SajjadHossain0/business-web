import React, {useEffect, useState} from "react";
import './Gallery.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function Gallery() {
    const [galleryItems, setGalleryItems] = useState([]);

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

    return (
        <>
            <Header/>
            <div className="container">
                <h1 className="title" style={{color: "#34495e", fontSize: 36, fontWeight: 700}}>
                    Our Story
                </h1>

                <div className="photo-gallery">
                    {galleryItems.length > 0 ? (
                        galleryItems.map((item, index) => (
                            <div key={index} className="photo">
                                <img src={`data:image/jpeg;base64,${item.image}`}
                                     alt={item.title}/>
                            </div>
                        ))
                    ):(
                        <CustomLoading/>
                    )}
                </div>
            </div>
            <Footer/>
        </>

    );
}
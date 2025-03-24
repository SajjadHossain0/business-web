import React, {useEffect, useState} from "react";
import ImageCard from "./ImageCard";
import './BoardOfDirectors.css'
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";


export default function BoardOfDirectors() {
    const [directors, setDirectors] = useState([]);


    useEffect(() => {
    const fetchDirectors = async () => {
        try {
            // Simulate an API response when backend is not running
            const demoDirectors = [
                {
                    image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", // Replace with a real image URL
                    name: "Michael Green",
                    position: "Chairman",
                    bio: "Michael is the Chairman of our Board, providing leadership and strategic direction."
                },
                {
                    image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", // Replace with a real image URL
                    name: "Sarah Lee",
                    position: "Vice Chairman",
                    bio: "Sarah supports the Chairman and oversees operational strategies."
                },
                {
                    image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", // Replace with a real image URL
                    name: "David Brown",
                    position: "Board Member",
                    bio: "David is a Board member with deep experience in finance and business growth."
                },
                {
                    image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg", // Replace with a real image URL
                    name: "Emily White",
                    position: "Board Member",
                    bio: "Emily brings expertise in technology and innovation to our Board."
                },
            ];

            setDirectors(demoDirectors);
        } catch (error) {
            console.error("Error fetching board members:", error);
        }
    };
        fetchDirectors();
    }, []);

/*
    useEffect(() => {
    const fetchDirectors = async () => {
        try {
            const response = await apiClient.get("/board/get-all");
            setDirectors(response.data);
        } catch (error) {
            console.error("Error fetching board members:", error);
        }
    };
        fetchDirectors();
    }, []);
*/

    return (
        <div className="bod-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="bod-image-grid-title">Board Of Directors</h1>
            <div className="bod-image-grid">

                {directors.length > 0 ? (
                    directors.slice(0, 4).map((director, index) => (
                        <div key={index} className="bod-image-grid-item">
                            <ImageCard
                                //imageUrl={`data:image/jpeg;base64,${director.image}`}
                                imageUrl={director.image}
                                title={director.name}
                                position={director.position}
                                text={director.bio}
                            />
                        </div>
                    ))
                    ):(
                        <CustomLoading />
                )}


            </div>
        </div>
    )
}
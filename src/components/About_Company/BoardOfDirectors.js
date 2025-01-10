import React, {useEffect, useState} from "react";
import ImageCard from "./ImageCard";
import './BoardOfDirectors.css'
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";


export default function BoardOfDirectors() {
    const [directors, setDirectors] = useState([]);

    const fetchDirectors = async () => {
        try {
            const response = await apiClient.get("/board/get-all");
            setDirectors(response.data);
        } catch (error) {
            console.error("Error fetching board members:", error);
        }
    };

    useEffect(() => {
        fetchDirectors();
    }, []);

    return (
        <div className="bod-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="bod-image-grid-title">Board Of Directors</h1>
            <div className="bod-image-grid">

                {directors.length > 0 ? (
                    directors.slice(0, 4).map((director, index) => (
                        <div key={index} className="bod-image-grid-item">
                            <ImageCard
                                imageUrl={`data:image/jpeg;base64,${director.image}`}
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
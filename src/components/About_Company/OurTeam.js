import React, {useEffect, useState} from "react";
import './OurTeam.css'
import ImageCard from "./ImageCard";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function OurTeam() {
    const [teamMembers, setTeamMembers] = useState([]);

    const fetchTeamMembers = async () => {
        try {
            const response = await apiClient.get("/team/get-all");
            setTeamMembers(response.data);
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);


    return (
        <div className="ourTeam-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="ourTeam-image-grid-title">Our Team</h1>
            <div className="ourTeam-image-grid">
                {teamMembers.length > 0 ? (
                    teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="ourTeam-image-grid-item">
                            <ImageCard
                                imageUrl={`data:image/jpeg;base64,${member.image}`}
                                title={member.name}
                                position={member.position}
                                text={member.bio}
                            />
                        </div>
                    ))
                ):(
                    <CustomLoading />
                )}

            </div>
        </div>
    );
}
import React, {useEffect, useState} from "react";
import './OurTeam.css'
import ImageCard from "./ImageCard";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function OurTeam() {
    const [teamMembers, setTeamMembers] = useState([]);


    useEffect(() => {
    const fetchTeamMembers = async () => {
        try {
            // Simulate an API response when backend is not running
            const demoTeamMembers = [
                {
                    image: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid", // Replace with a real image URL
                    name: "John Doe",
                    position: "CEO",
                    bio: "John is the visionary behind our company."
                },
                {
                    image: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid", // Replace with a real image URL
                    name: "Jane Smith",
                    position: "CTO",
                    bio: "Jane is the technical genius who leads our development team."
                },
                {
                    image: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid", // Replace with a real image URL
                    name: "Alice Brown",
                    position: "Marketing Head",
                    bio: "Alice handles all marketing and branding strategies."
                },
                {
                    image: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid", // Replace with a real image URL
                    name: "Bob Johnson",
                    position: "Sales Manager",
                    bio: "Bob oversees our sales operations and client relations."
                },
            ];

            setTeamMembers(demoTeamMembers);
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

        fetchTeamMembers();
    }, []);

/*
    useEffect(() => {
    const fetchTeamMembers = async () => {
        try {
            const response = await apiClient.get("/team/get-all");
            setTeamMembers(response.data);
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

        fetchTeamMembers();
    }, []);
*/


    return (
        <div className="ourTeam-image-grid-container">
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}} className="ourTeam-image-grid-title">Our Team</h1>
            <div className="ourTeam-image-grid">
                {teamMembers.length > 0 ? (
                    teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="ourTeam-image-grid-item">
                            <ImageCard
                                //imageUrl={`data:image/jpeg;base64,${member.image}`}
                                imageUrl={member.image}
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
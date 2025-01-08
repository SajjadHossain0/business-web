import React, { useState, useEffect } from "react";
import "./CompanyDetails.css";
import apiClient from "../API/apiClient";

export default function CompanyDetails() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [directors, setDirectors] = useState([]);

    // Fetch all team members from the backend
    const fetchTeamMembers = async () => {
        try {
            const response = await apiClient.get("/team/get-all");
            setTeamMembers(response.data);
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

    // Fetch all board members from the backend
    const fetchDirectors = async () => {
        try {
            const response = await apiClient.get("/board/get-all");
            setDirectors(response.data);
        } catch (error) {
            console.error("Error fetching board members:", error);
        }
    };

    // Add a new member (team or board)
    const handleAddMember = async (endpoint, list, setList, newMember) => {
        try {
            const formData = new FormData();
            formData.append("image", newMember.image); // File object
            formData.append("name", newMember.name);
            formData.append("position", newMember.position);
            formData.append("bio", newMember.bio);

            const response = await apiClient.post(endpoint, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setList([...list, response.data]);
        } catch (error) {
            console.error(`Error adding to ${endpoint}:`, error);
        }
    };


    // Delete a member (team or board)
    const handleDeleteMember = async (endpoint, list, setList, id) => {
        try {
            await apiClient.delete(`${endpoint}/${id}`);
            setList(list.filter((member) => member.id !== id));
        } catch (error) {
            console.error(`Error deleting from ${endpoint}:`, error);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        fetchTeamMembers();
        fetchDirectors();
    }, []);

    return (
        <div className="company-details">
            <h2>About Our Company</h2>

            {/* Our Team Section */}
            <TeamSection
                title="Our Team"
                members={teamMembers}
                onAdd={(newMember) =>
                    handleAddMember("/team/add", teamMembers, setTeamMembers, newMember)
                }
                onDelete={(id) =>
                    handleDeleteMember("/team/delete", teamMembers, setTeamMembers, id)
                }
            />



            {/* Board of Directors Section */}
            <TeamSection
                title="Board of Directors"
                members={directors}
                onAdd={(newDirector) =>
                    handleAddMember("/board/add", directors, setDirectors, newDirector)
                }
                onDelete={(id) =>
                    handleDeleteMember("/board/delete", directors, setDirectors, id)
                }
            />
        </div>
    );
}

function TeamSection({ title, members, onAdd, onDelete }) {
    const [newMember, setNewMember] = useState({
        image: "",
        name: "",
        position: "",
        bio: "",
    });

    const handleAddClick = () => {
        if (newMember.image && newMember.name && newMember.position && newMember.bio) {
            onAdd(newMember);
            setNewMember({ image: "", name: "", position: "", bio: "" });
        } else {
            alert("Please fill out all fields before adding a member.");
        }
    };

    return (
        <div className="section">
            <h3>{title}</h3>
            <div className="form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewMember({...newMember, image: e.target.files[0]})}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={newMember.position}
                    onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                />
                <textarea
                    placeholder="Bio"
                    value={newMember.bio}
                    onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                    rows="2"
                ></textarea>
                <button onClick={handleAddClick}>Add {title}</button>
            </div>

            <ul className="team-list">
                {members.map((member) => (
                    <li key={member.id}>
                        <img
                            src={`data:image/jpeg;base64,${member.image}`} // Assuming image is base64
                            alt={member.name}
                        />
                        <div>
                            <h4>{member.name}</h4>
                            <p>{member.position}</p>
                            <p>{member.bio}</p>
                            <button
                                className="remove-button"
                                onClick={() => onDelete(member.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

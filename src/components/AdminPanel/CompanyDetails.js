import React, { useState } from "react";
import "./CompanyDetails.css";

export default function CompanyDetails() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [directors, setDirectors] = useState([]);

    const handleAddMember = (list, setList, newMember) => {
        setList([...list, { id: Date.now(), ...newMember }]);
    };

    const handleDeleteMember = (list, setList, id) => {
        setList(list.filter((member) => member.id !== id));
    };

    return (
        <div className="company-details">
            <h2>About Our Company</h2>

            {/* Our Team Section */}
            <TeamSection
                title="Our Team"
                members={teamMembers}
                onAdd={(newMember) => handleAddMember(teamMembers, setTeamMembers, newMember)}
                onDelete={(id) => handleDeleteMember(teamMembers, setTeamMembers, id)}
            />

            {/* Board of Directors Section */}
            <TeamSection
                title="Board of Directors"
                members={directors}
                onAdd={(newDirector) => handleAddMember(directors, setDirectors, newDirector)}
                onDelete={(id) => handleDeleteMember(directors, setDirectors, id)}
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
                    type="text"
                    placeholder="Image URL"
                    value={newMember.image}
                    onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
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
                        <img src={member.image} alt={member.name} />
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

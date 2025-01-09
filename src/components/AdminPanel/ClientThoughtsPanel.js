import React, { useState, useEffect } from "react";
import "./ClintThoughtsPanel.css";
import apiClient from "../API/apiClient";

export default function ClintThoughtsPanel() {
    const [thoughts, setThoughts] = useState([]);
    const [image, setImage] = useState(null); // Updated to handle file input
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    // Fetch testimonials from the API
    useEffect(() => {
        apiClient.get("/testimonials/get-all")
            .then((response) => setThoughts(response.data))
            .catch((error) => console.error("Error fetching testimonials:", error));
    }, []);

    const fetchThoughts = async () => {
        try {
            const response = await apiClient.get("/testimonials");
            setThoughts(response.data); // Assuming the API returns an array of testimonials
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        }
    };

    useEffect(() => {
        fetchThoughts();
    }, []);

    const handleAddThought = async (e) => {
        e.preventDefault();

        if (image && name && text) {
            const formData = new FormData();
            formData.append("image", image); // Ensure `image` is a File object
            formData.append("name", name);
            formData.append("thought", text);

            try {
                const response = await apiClient.post("/testimonials/add", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log("Testimonial added successfully:", response.data);

                // Update local state to include the new testimonial
                setThoughts((prevThoughts) => [...prevThoughts, response.data]);

                // Clear form fields
                setImage(null);
                setName("");
                setText("");
            } catch (error) {
                console.error("Error adding testimonial:", error);
            }
        } else {
            alert("Please fill out all fields before adding!");
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // File object
    };


    // Handle deletion of a testimonial
    const handleDeleteThought = (id) => {
        apiClient.delete(`/testimonials/delete/${id}`)
            .then(() => {
                setThoughts(thoughts.filter((thought) => thought.id !== id));
            })
            .catch((error) => console.error("Error deleting testimonial:", error));
    };

    return (
        <div className="clint-thoughts-panel">
            <h2 className="panel-title">What Our Clients Think</h2>

            {/* Add Client Thought Form */}
            <form className="thought-form" onSubmit={handleAddThought}>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="image">Client Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                            className="form-control"
                            accept="image/*"
                        />
                    </div>

                </div>

                <div className="form-group">
                    <label htmlFor="name">Client Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter client name"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text">Client Thought</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter client's thought"
                        className="form-control"
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Add Thought
                </button>
            </form>

            {/* Display Client Thoughts */}
            <div className="thoughts-display">
                <h3 className="section-title">Client Thoughts</h3>
                {thoughts.length > 0 ? (
                    <ul className="thoughts-list">
                        {thoughts.map((thought) => (
                            <li key={thought.id} className="thought-item">
                                <img
                                    src={`data:image/jpeg;base64,${thought.image}`}
                                    alt={thought.name}
                                    className="client-image"
                                />
                                <div className="thought-info">
                                    <h4 className="client-name">{thought.name}</h4>
                                    <p className="client-text">"{thought.thought}"</p>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteThought(thought.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-thoughts">No client thoughts added yet.</p>
                )}
            </div>
        </div>
    );
}

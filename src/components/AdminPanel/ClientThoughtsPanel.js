import React, { useState } from "react";
import "./ClintThoughtsPanel.css";

export default function ClintThoughtsPanel() {
    const [thoughts, setThoughts] = useState([]);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleAddThought = (e) => {
        e.preventDefault();
        if (image && name && text) {
            setThoughts([...thoughts, { id: Date.now(), image, name, text }]);
            setImage("");
            setName("");
            setText("");
        } else {
            alert("Please fill out all fields before adding!");
        }
    };

    const handleDeleteThought = (id) => {
        setThoughts(thoughts.filter((thought) => thought.id !== id));
    };

    return (
        <div className="clint-thoughts-panel">
            <h2 className="panel-title">What Our Clients Think</h2>

            {/* Add Client Thought Form */}
            <form className="thought-form" onSubmit={handleAddThought}>
                <div className="form-group">
                    <label htmlFor="image">Client Image URL</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter client image URL"
                        className="form-control"
                    />
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
                                    src={thought.image}
                                    alt={thought.name}
                                    className="client-image"
                                />
                                <div className="thought-info">
                                    <h4 className="client-name">{thought.name}</h4>
                                    <p className="client-text">"{thought.text}"</p>
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

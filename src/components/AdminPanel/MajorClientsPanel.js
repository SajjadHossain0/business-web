import React, {useEffect, useState} from "react";
import "./MajorClientsPanel.css";
import apiClient from "../API/apiClient";

export default function MajorClientsPanel() {

    const [clients, setClients] = useState([]);
    const [successStories, setSuccessStories] = useState([]);

    useEffect(() => {
        fetchClients();
        fetchSuccessStories();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await apiClient.get("/major-client/get-all");
            setClients(response.data);
        } catch (error) {
            console.error("Error fetching clients:", error);
        }
    };

    const fetchSuccessStories = async () => {
        try {
            const response = await apiClient.get("/success-story/get-all");
            setSuccessStories(response.data);
        } catch (error) {
            console.error("Error fetching success stories:", error);
        }
    };

    const handleAddClient = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", e.target.clientName.value);
        formData.append("industryName", e.target.industryName.value);
        formData.append("image", e.target.clientImage.files[0]);

        try {
            await apiClient.post("/major-client/add", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            fetchClients(); // Refresh the list
            alert("Client added successfully.");

            // Clear the form fields
            e.target.reset();
        } catch (error) {
            console.error("Error adding client:", error);
        }
    };

    const handleAddSuccessStory = async (e) => {
        e.preventDefault();

        const successStory = {
            successName: e.target.successName.value,
            successText: e.target.successText.value,
            successQuote: e.target.successQuote.value,
        };

        try {
            await apiClient.post("/success-story/add", successStory);
            fetchSuccessStories(); // Refresh the list
            alert("Success story added successfully.");

            // Clear the form fields
            e.target.reset();
        } catch (error) {
            console.error("Error adding success story:", error);
        }
    };

    const deleteClient = async (id) => {
        try {
            await apiClient.delete(`/major-client/delete/${id}`);
            fetchClients(); // Refresh the list
            alert("Client deleted successfully.");
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };

    const deleteSuccessStory = async (id) => {
        try {
            await apiClient.delete(`/success-story/delete/${id}`);
            fetchSuccessStories(); // Refresh the list
            alert("Success story deleted successfully.");
        } catch (error) {
            console.error("Error deleting success story:", error);
        }
    };


    return (
        <div className="clients-panel">
            <h2 className="clients-title">Manage Major Clients</h2>

            {/* Trusted by Industry Leaders Form */}
            <form className="clients-form" id="industry-leaders-form" onSubmit={handleAddClient}>
                <h3 className="section-title">Trusted by Industry Leaders</h3>

                {/* Client Image */}
                <div className="form-group">
                    <label htmlFor="clientImage">Client Image</label>
                    <input
                        type="file"
                        id="clientImage"
                        name="clientImage"
                        accept="image/*"
                        className="form-control"
                    />
                </div>

                {/* Client Name */}
                <div className="form-group">
                    <label htmlFor="clientName">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        placeholder="Enter client name"
                        className="form-control"
                    />
                </div>

                {/* Industry Name */}
                <div className="form-group">
                    <label htmlFor="industryName">Industry Name</label>
                    <input
                        type="text"
                        id="industryName"
                        name="industryName"
                        placeholder="Enter industry name"
                        className="form-control"
                    />
                </div>

                {/* Submit Button for Trusted by Industry Leaders */}
                <button type="submit" className="clients-submit-btn">
                    Save Trusted Client
                </button>
            </form>
            {/* Display Major Clients */}
            <div>
                <h3 className="section-title">Major Clients</h3>
                {clients.length > 0 ? (
                    <ul className="client-list">
                        {clients.map((client) => (
                            <li key={client.id} className="client-item">
                                <img
                                    src={`data:image/jpeg;base64,${client.image}`}
                                    alt={client.name}
                                    className="client-image"
                                />
                                <div className="client-info">
                                    <h4>{client.name}</h4>
                                    <p>{client.industryName}</p>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteClient(client.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No major clients found.</p>
                )}
            </div>

            {/* Client Success Stories Form */}
            <form className="clients-form" id="client-success-form" onSubmit={handleAddSuccessStory}>
                <h3 className="section-title">Client Success Stories</h3>

                {/* Success Name */}
                <div className="form-group">
                    <label htmlFor="successName">Success Name</label>
                    <input
                        type="text"
                        id="successName"
                        name="successName"
                        placeholder="Enter success name"
                        className="form-control"
                    />
                </div>

                {/* Success Text */}
                <div className="form-group">
                    <label htmlFor="successText">Success Text</label>
                    <textarea
                        id="successText"
                        name="successText"
                        rows="4"
                        placeholder="Write about the client's success"
                        className="form-control"
                    ></textarea>
                </div>

                {/* Success Quote */}
                <div className="form-group">
                    <label htmlFor="successQuote">Success Quote</label>
                    <input
                        type="text"
                        id="successQuote"
                        name="successQuote"
                        placeholder="Enter a client success quote"
                        className="form-control"
                    />
                </div>

                {/* Submit Button for Client Success Stories */}
                <button type="submit" className="clients-submit-btn">
                    Save Success Story
                </button>
            </form>
            {/* Display Success Stories */}
            <div>
                <h3 className="section-title">Client Success Stories</h3>
                {successStories.length > 0 ? (
                    <ul className="success-list">
                        {successStories.map((story) => (
                            <li key={story.id} className="success-item">
                                <div className="success-info">
                                    <h4>{story.successName}</h4>
                                    <p>{story.successText}</p>
                                    <blockquote>{story.successQuote}</blockquote>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteSuccessStory(story.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No success stories found.</p>
                )}
            </div>

        </div>
    );
}

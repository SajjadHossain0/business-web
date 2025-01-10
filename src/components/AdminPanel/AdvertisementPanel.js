import React, { useState, useEffect } from "react";
import "./AdvertisementPanel.css";
import apiClient from "../API/apiClient";

export default function AdvertisementPanel() {
    const [advertisements, setAdvertisements] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        image: null,
    });

    // Fetch advertisements on component mount
    useEffect(() => {
        fetchAdvertisements();
    }, []);

    const fetchAdvertisements = async () => {
        try {
            const response = await apiClient.get("/advertisements/get-ads");
            setAdvertisements(response.data);
        } catch (error) {
            console.error("Error fetching advertisements:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                image: file, // Save file object
            }));
        }
    };

    const handleAddAdvertisement = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("image", formData.image);

        try {
            const response = await apiClient.post("/advertisements/save-ads", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Advertisement added successfully!");
            setFormData({ title: "", image: null });
            fetchAdvertisements();
        } catch (error) {
            console.error("Error adding advertisement:", error);
            alert("Failed to add advertisement.");
        }
    };

    const handleDeleteAdvertisement = async (id) => {
        try {
            await apiClient.delete(`/advertisements/delete/${id}`);
            alert("Advertisement deleted successfully!");
            fetchAdvertisements();
        } catch (error) {
            console.error("Error deleting advertisement:", error);
        }
    };

    return (
        <div className="advertisement-panel">
            <h1>Advertisement Management</h1>
            <form onSubmit={handleAddAdvertisement} className="advertisement-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter advertisement title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="add-button">
                    Add Advertisement
                </button>
            </form>
            <h2>Advertisements</h2>
            <div className="advertisement-list">

                {advertisements.map((ad) => (
                    <div key={ad.id} className="advertisement-card">
                        <img
                            src={`data:image/jpeg;base64,${ad.image}`}
                            alt={ad.title}
                            className="advertisement-image"
                        />
                        <p><strong>Title:</strong> {ad.title}</p>
                        <button
                            onClick={() => handleDeleteAdvertisement(ad.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

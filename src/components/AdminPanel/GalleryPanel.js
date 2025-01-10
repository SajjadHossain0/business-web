import React, { useState, useEffect } from "react";
import "./GalleryPanel.css";
import apiClient from "../API/apiClient";

export default function GalleryPanel() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");

    // Fetch gallery items from the backend
    useEffect(() => {
        const fetchGalleryItems = async () => {
            try {
                const response = await apiClient.get("/gallery/get-all");
                setGalleryItems(response.data);
            } catch (error) {
                console.error("Error fetching gallery items:", error);
            }
        };

        fetchGalleryItems();
    }, []);

    // Handle adding a new gallery item
    const handleAddItem = async (e) => {
        e.preventDefault();
        if (image && title) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", title);

            try {
                const response = await apiClient.post("/gallery/add", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                setGalleryItems([...galleryItems, response.data]); // Add the new item to the gallery
                setImage(null);
                setTitle("");
                alert("Image added successfully!");
            } catch (error) {
                console.error("Error adding gallery item:", error);
                alert("Failed to add image. Please try again.");
            }
        } else {
            alert("Please provide an image and a title.");
        }
    };

    // Handle deleting a gallery item
    const handleDeleteItem = async (id) => {
        try {
            await apiClient.delete(`/gallery/delete/${id}`);
            setGalleryItems(galleryItems.filter((item) => item.id !== id));
            alert("Image deleted successfully!");
        } catch (error) {
            console.error("Error deleting gallery item:", error);
            alert("Failed to delete image. Please try again.");
        }
    };

    return (
        <div className="gallery-panel">
            <h2 className="gallery-title">Manage Gallery</h2>

            {/* Add Image Form */}
            <form className="gallery-form" onSubmit={handleAddItem}>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])} // Capture the file object
                        className="form-control"
                        accept="image/*"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title for the image"
                        className="form-control"
                    />
                </div>

                <button type="submit" className="gallery-submit-btn">
                    Add to Gallery
                </button>
            </form>

            {/* Display Gallery Items */}
            <div className="gallery-items">
                <h3 className="gallery-section-title">Gallery Items</h3>
                {galleryItems.length > 0 ? (
                    <ul className="gallery-list">
                        {galleryItems.map((item) => (
                            <li key={item.id} className="gallery-item">
                                <img
                                    src={`data:image/jpeg;base64,${item.image}`} // Display image from bytes
                                    alt={item.title}
                                    className="gallery-image"
                                />
                                <div className="gallery-info">
                                    <h4>{item.title}</h4>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-gallery-items">No items added yet.</p>
                )}
            </div>
        </div>
    );
}

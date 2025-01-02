import React, { useState } from "react";
import "./GalleryPanel.css";

export default function GalleryPanel() {
    const [galleryItems, setGalleryItems] = useState([]);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");

    const handleAddItem = (e) => {
        e.preventDefault();
        if (image && title) {
            setGalleryItems([...galleryItems, { id: Date.now(), image, title }]);
            setImage("");
            setTitle("");
        } else {
            alert("Please fill out both fields before adding!");
        }
    };

    const handleDeleteItem = (id) => {
        setGalleryItems(galleryItems.filter((item) => item.id !== id));
    };

    return (
        <div className="gallery-panel">
            <h2 className="gallery-title">Manage Gallery</h2>

            {/* Add Image Form */}
            <form className="gallery-form" onSubmit={handleAddItem}>
                <div className="form-group">
                    <label htmlFor="image">Image URL</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image URL"
                        className="form-control"
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
                                <img src={item.image} alt={item.title} className="gallery-image" />
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

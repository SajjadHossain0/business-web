import React, { useEffect, useState } from "react";
import "./ContactsPanel.css";
import apiClient from "../API/apiClient";

export default function ContactsPanel() {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        id: null,
        address: "",
        phone: "",
        email: "",
        businesshour: "",
        facebooklink: "",
        linkedinlink: "",
        instagramlink: "",
        youtubelink: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await apiClient.get("/contact/get-contacts"); // Use apiClient here
            setContacts(response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            if (isEditing && formData.id) {
                // Update existing contact
                await apiClient.put(`/contact/edit/${formData.id}`, formData); // Use apiClient here
                alert("Contact updated successfully!");
            } else {
                // Add new contact
                await apiClient.post("/contact/save-contacts", formData); // Use apiClient here
                alert("Contact added successfully!");
            }

            setFormData({
                id: null,
                address: "",
                phone: "",
                email: "",
                businesshour: "",
                facebooklink: "",
                linkedinlink: "",
                instagramlink: "",
                youtubelink: "",
            });
            setIsEditing(false);
            fetchContacts();
        } catch (error) {
            console.error("Error saving contact:", error);
        }
    };

    const handleEdit = (contact) => {
        setFormData(contact);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiClient.delete(`/contact/delete/${id}`); // Use apiClient here
            alert("Contact deleted successfully!");
            fetchContacts();
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div className="contacts-panel">
            <h1>Contact Management</h1>
            <form onSubmit={handleSave} className="contact-form">
                <div className="form-group">
                    <label>Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="2"
                        placeholder="Enter address"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Business Hours</label>
                    <input
                        type="text"
                        name="businesshour"
                        value={formData.businesshour}
                        onChange={handleInputChange}
                        placeholder="Enter business hours"
                    />
                </div>
                <div className="form-group">
                    <label>Facebook Link</label>
                    <input
                        type="text"
                        name="facebooklink"
                        value={formData.facebooklink}
                        onChange={handleInputChange}
                        placeholder="Enter Facebook URL"
                    />
                </div>
                <div className="form-group">
                    <label>LinkedIn Link</label>
                    <input
                        type="text"
                        name="linkedinlink"
                        value={formData.linkedinlink}
                        onChange={handleInputChange}
                        placeholder="Enter LinkedIn URL"
                    />
                </div>
                <div className="form-group">
                    <label>Instagram Link</label>
                    <input
                        type="text"
                        name="instagramlink"
                        value={formData.instagramlink}
                        onChange={handleInputChange}
                        placeholder="Enter Instagram URL"
                    />
                </div>
                <div className="form-group">
                    <label>YouTube Link</label>
                    <input
                        type="text"
                        name="youtubelink"
                        value={formData.youtubelink}
                        onChange={handleInputChange}
                        placeholder="Enter YouTube URL"
                    />
                </div>
                <button type="submit" className="save-button">
                    {isEditing ? "Update Contact" : "Add Contact"}
                </button>
            </form>

            <div className="contacts-list">
                <h2>Saved Contacts</h2>
                {contacts.map((contact) => (
                    <div key={contact.id} className="contact-card">
                        <p><strong>Address:</strong> {contact.address}</p>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Business Hours:</strong> {contact.businesshour}</p>
                        <p><strong>Facebook:</strong> {contact.facebooklink}</p>
                        <p><strong>LinkedIn:</strong> {contact.linkedinlink}</p>
                        <p><strong>Instagram:</strong> {contact.instagramlink}</p>
                        <p><strong>YouTube:</strong> {contact.youtubelink}</p>
                        <button onClick={() => handleEdit(contact)} className="edit-button">Edit</button>
                        <button onClick={() => handleDelete(contact.id)} className="delete-button">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

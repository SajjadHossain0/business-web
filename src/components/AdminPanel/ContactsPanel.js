import React, { useEffect, useState } from "react";
import "./ContactsPanel.css";
import apiClient from "../API/apiClient";

export default function ContactsPanel() {
    const [contactData, setContactData] = useState({
        address: "",
        phoneNumber: "",
        email: "",
        businessHours: "",
        socialLinks: {
            facebook: "",
            youtube: "",
            linkedin: "",
            instagram: ""
        },
    });

    useEffect(() => {
        fetchContactData();
    }, []);

    const fetchContactData = async () => {
        try {
            const response = await apiClient.get("/contact/get");
            setContactData(response.data || {});
        } catch (error) {
            console.error("Failed to fetch contact data", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSocialChange = (e, platform) => {
        setContactData({
            ...contactData,
            socialLinks: {
                ...contactData.socialLinks,
                [platform]: e.target.value,
            },
        });
    };

    const saveContactData = async (e) => {
        e.preventDefault();
        const dataToSave = {
            address: contactData.address,
            phone: contactData.phoneNumber,
            email: contactData.email,
            businesshour: contactData.businessHours,
            facebooklink: contactData.socialLinks.facebook,
            linkedinlink: contactData.socialLinks.linkedin,
            instagramlink: contactData.socialLinks.instagram,
            youtubelink: contactData.socialLinks.youtube
        };
        try {
            await apiClient.post("/contact/save-contacts", dataToSave);
            alert("Contact information saved successfully!");
        } catch (error) {
            console.error("Failed to save contact data", error);
        }
    };


    const deleteContactData = async () => {
        if (!contactData.id) {
            alert("No contact ID found to delete.");
            return;
        }
        try {
            await apiClient.delete(`/contact/delete/${contactData.id}`);
            setContactData({
                address: "",
                phoneNumber: "",
                email: "",
                businessHours: "",
                socialLinks: {
                    facebook: "",
                    youtube: "",
                    linkedin: "",
                    instagram: ""
                },
            });
            alert("Contact information deleted successfully!");
        } catch (error) {
            console.error("Failed to delete contact data", error);
            alert("Failed to delete contact data.");
        }
    };



    return (
        <div className="contacts-panel">
            <h1 className="panel-title">Contact Information</h1>
            <form className="contact-form" onSubmit={saveContactData}>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={contactData.address}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Enter your company's address"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phoneNumber"
                        value={contactData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="business-hours">Business Hours</label>
                    <input
                        type="text"
                        id="business-hours"
                        name="businessHours"
                        value={contactData.businesshour}
                        onChange={handleChange}
                        placeholder="e.g., Mon-Fri, 9:00 AM - 5:00 PM"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="social-links">Social Links</label>
                    <div className="social-links">
                        <input
                            type="text"
                            placeholder="Facebook URL"
                            value={contactData.facebooklink}
                            onChange={(e) => handleSocialChange(e, "facebook")}
                        />
                        <input
                            type="text"
                            placeholder="YouTube URL"
                            value={contactData.youtubelink}
                            onChange={(e) => handleSocialChange(e, "youtube")}
                        />
                        <input
                            type="text"
                            placeholder="LinkedIn URL"
                            value={contactData.linkedinlink}
                            onChange={(e) => handleSocialChange(e, "linkedin")}
                        />
                        <input
                            type="text"
                            placeholder="Instagram URL"
                            value={contactData.instagramlink}
                            onChange={(e) => handleSocialChange(e, "instagram")}
                        />
                    </div>
                </div>
                <button type="submit" className="save-button">
                    Save Information
                </button>
                <button
                    type="button"
                    className="delete-button"
                    onClick={deleteContactData}
                >
                    Delete Information
                </button>
            </form>
        </div>
    );
}

import React from "react";
import "./ContactsPanel.css";

export default function ContactsPanel() {
    return (
        <div className="contacts-panel">
            <h1 className="panel-title">Contact Information</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        rows="3"
                        placeholder="Enter your company's address"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="business-hours">Business Hours</label>
                    <input
                        type="text"
                        id="business-hours"
                        placeholder="e.g., Mon-Fri, 9:00 AM - 5:00 PM"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="social-links">Social Links</label>
                    <div className="social-links">
                        <input
                            type="url"
                            placeholder="Facebook URL"
                        />
                        <input
                            type="url"
                            placeholder="YouTube URL"
                        />
                        <input
                            type="url"
                            placeholder="LinkedIn URL"
                        />
                        <input
                            type="url"
                            placeholder="Instagram URL"
                        />
                    </div>
                </div>
                <button type="submit" className="save-button">
                    Save Information
                </button>
            </form>
        </div>
    );
}

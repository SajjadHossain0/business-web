import React from "react";
import "./MajorClientsPanel.css";

export default function MajorClientsPanel() {
    return (
        <div className="clients-panel">
            <h2 className="clients-title">Manage Major Clients</h2>

            {/* Trusted by Industry Leaders Form */}
            <form className="clients-form" id="industry-leaders-form">
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

            {/* Client Success Stories Form */}
            <form className="clients-form" id="client-success-form">
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
        </div>
    );
}

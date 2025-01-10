import React, { useState } from 'react';
import './Authentication.css';
import AdminHeader from "../AdminHeader";
import apiClient from "../../API/apiClient";

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/register', { name, email, password });
            console.log("Registration Successful:", response.data);
            setSuccess(true);

            // Optionally clear form fields
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error("Registration Error:", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "An error occurred during registration.");
        }
    };

    return (
        <>
            <AdminHeader/>
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Create an Account</h2>
                    <p className="auth-subtitle">Join us today and get started</p>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="error-message">{error}</p>}
                        {success && <p className="success-message">Registration successful! You can now <a href="/login">log in</a>.</p>}
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="auth-button" type="submit">Register</button>
                    </form>
                    <p className="auth-footer">
                        Already have an account? <a href="/login">Log In</a>
                    </p>
                </div>
            </div>
        </>
    );
}

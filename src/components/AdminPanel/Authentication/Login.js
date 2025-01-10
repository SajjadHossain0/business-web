import React, { useState } from 'react';
import './Authentication.css';
import AdminHeader from "../AdminHeader";
import apiClient from "../../API/apiClient";
import {Navigate, useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/login', { email, password });
            console.log("Login Successful:", response.data);

            // Store token in local storage or cookies
            localStorage.setItem("token", response.data.token);

            // Redirect or handle successful login
            navigate("/admin-dashboard");

        } catch (error) {
            console.error("Login Error:", error.response?.data?.message || error.message);
            setError(error.response?.data?.message || "An error occurred during login.");
        }
    };

    return (
        <>
            <AdminHeader/>
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Log in to access your account</p>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="error-message">{error}</p>}
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
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="auth-button" type="submit">Log In</button>
                    </form>
                    <p className="auth-footer">
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </div>
            </div>
        </>
    );
}

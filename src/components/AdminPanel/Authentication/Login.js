import React, { useState } from 'react';
import './Authentication.css';
import AdminHeader from "../AdminHeader";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Details:", { email, password });
        // Add your login API integration here
    };

    return (
        <>
            <AdminHeader/>
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Log in to access your account</p>
                    <form onSubmit={handleSubmit}>
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

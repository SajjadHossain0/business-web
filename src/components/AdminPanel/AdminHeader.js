import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./AdminHeader.css";

export default function AdminHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the token exists in localStorage
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem("token");

        // Update the login state
        setIsLoggedIn(false);

        // Redirect to login page
        navigate("/login");
    };

    const handleLogin = () => {
        // Redirect to login page
        navigate("/login");
    };

    return (
        <header className="admin-header">
            <h1>Admin Panel</h1>
            <div className="admin-header-actions">

                {isLoggedIn ? (
                    <>
                        <span className="admin-user">Hello, Admin</span>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
}

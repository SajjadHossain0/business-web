import React from "react";
import "./AdminHeader.css";

export default function AdminHeader() {
    return (
        <header className="admin-header">
            <h1>Admin Panel</h1>
            <div className="admin-header-actions">
                <span className="admin-user">Hello, Admin</span>
                <button className="logout-button">Logout</button>
            </div>
        </header>
    );
}

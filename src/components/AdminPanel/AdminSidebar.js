import React from "react";
import "./AdminSidebar.css";

export default function AdminSidebar() {
    return (
        <aside className="admin-sidebar">
            <ul>
                <li><a href="/homepanel">Home Panel</a></li>
                <li>Manage Users</li>
                <li>Orders</li>
                <li>Products</li>
                <li>Reports</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}

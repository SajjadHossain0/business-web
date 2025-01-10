import React from "react";
import "./AdminSidebar.css";

export default function AdminSidebar({ setActiveContent }) {
    return (
        <aside className="admin-sidebar">
            <ul>
                <li onClick={() => setActiveContent("Advertisement")}>Manage Advertisement</li>
                <li onClick={() => setActiveContent("CompanyDetails")}>Manage Company Details</li>
                <li onClick={() => setActiveContent("ClientThoughts")}>Manage Client Thoughts</li>
                <li onClick={() => setActiveContent("Gallery")}>Manage Gallery</li>
                <li onClick={() => setActiveContent("MajorClients")}>Manage Major Clients</li>
                <li onClick={() => setActiveContent("Blogs")}>Manage Blogs</li>
                <li onClick={() => setActiveContent("Contacts")}>Manage Contacts</li>
            </ul>
        </aside>
    );
}

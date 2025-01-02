import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <AdminHeader />
            <div className="admin-body">
                <AdminSidebar />
                <div className="admin-content">
                    <h1>Welcome to the Admin Dashboard</h1>
                    <p>Select an option from the sidebar to get started.</p>
                </div>
            </div>
        </div>
    );
}


/*
Login

Home =>
    About us
    picture
    social links
    services
    why choose us

About company =>
    mission text and image
    vission " "
    story text
    our team =>
        image
        name
        position
        bio
    Board of directors =>
        image
        name
        position
        bio

What our clint though =>
    image
    name
    text

Gallery =>
    images

Major clint =>
    image
    name
    industry name
    clint success =>
        name
        text
        quotes

Blogs =>
    image
    title
    text
    date, name

Contact =>
    address
    phone
    email
    time
*/
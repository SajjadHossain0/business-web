import React, {useState} from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "./AdminDashboard.css";
import CompanyDetails from "./CompanyDetails";
import ClientThoughtsPanel from "./ClientThoughtsPanel";
import GalleryPanel from "./GalleryPanel";
import MajorClientsPanel from "./MajorClientsPanel";
import BlogsPanel from "./BlogsPanel";
import ContactsPanel from "./ContactsPanel";
import AdvertisementPanel from "./AdvertisementPanel";

export default function AdminDashboard() {
    const [activeContent, setActiveContent] = useState("HomePanel");


    const renderContent = () => {
        switch (activeContent) {
            case "Advertisement":
                return <AdvertisementPanel/>;
            case "CompanyDetails":
                return <CompanyDetails/>;
            case "ClientThoughts":
                return <ClientThoughtsPanel/>;
            case "Gallery":
                return <GalleryPanel/>;
            case "MajorClients":
                return <MajorClientsPanel/>;
            case "Blogs":
                return <BlogsPanel/>;
            case "Contacts":
                return <ContactsPanel/>;
            default:
                return <h1>Welcome to the Admin Dashboard</h1>;
        }
    };

    return (
        <div className="admin-dashboard">
            <AdminHeader/>
            <div className="admin-body">
                <AdminSidebar setActiveContent={setActiveContent}/>
                <div className="admin-content">{renderContent()}</div>
            </div>
        </div>
    );
}


/*
Login

Home =>
advertisement image
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

Trusted by Industry Leaders
    image
    name
    industry name

clint success
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
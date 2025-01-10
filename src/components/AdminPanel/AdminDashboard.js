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

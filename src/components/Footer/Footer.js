import React, {useEffect, useState} from 'react';
import './Footer.css';
import {FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import apiClient from "../API/apiClient";

export default function Footer() {
    const [contactdetails, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await apiClient.get("/contact/get-contacts"); // Use apiClient here
            setContacts(response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };
    return (
        <div className="page-container">

            <footer className="footer">
                <hr></hr>
                {contactdetails.map((contact) => (
                    <div className="social-icons d-flex justify-content-center">
                        <a href={contact.linkedinlink} rel="noreferrer" target="_blank"
                           className="footer-icon mx-2">
                            <FaLinkedin/>
                        </a>
                        <a href={contact.instagramlink} rel="noreferrer" target="_blank"
                           className="footer-icon mx-2">
                            <RiInstagramFill/>
                        </a>
                        <a href={contact.facebooklink} rel="noreferrer" target="_blank"
                           className="footer-icon mx-2">
                            <FaFacebook/>
                        </a>
                        <a href={contact.youtubelink} rel="noreferrer" target="_blank"
                           className="footer-icon mx-2">
                            <FaYoutube/>
                        </a>
                    </div>
                ))}
                <hr></hr>
                <p>&copy; {new Date().getFullYear()} Sajjad Hossain. All rights reserved.</p>
            </footer>
        </div>
    );
}

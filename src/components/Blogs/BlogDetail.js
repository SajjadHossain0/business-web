import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";

export default function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    // Fetch the blog details based on the ID
    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                const response = await apiClient.get(`/blog/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchBlogDetail();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="blog-detail-container">
                <div align="left" className="back-btn">
                    <span><a href="/blogs">Back</a></span>
                </div>

                <img
                    src={`data:image/jpeg;base64,${blog.image}`}
                    alt={blog.title}
                    className="blog-detail-image"
                />

                <h1>{blog.title}</h1>
                <p className="blog-detail-meta">
                    {blog.date} | {blog.authorName}
                </p>
                <div className="blog-detail-content">{blog.content}</div>
            </div>
            <Footer/>
        </>
    );
}

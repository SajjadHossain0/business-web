import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    // Fetch blogs from the API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await apiClient.get("/blog/get-all");
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    // Navigate to the detailed blog view
    const handleReadMore = (id) => {
        navigate(`/blogs/${id}`);
    };

    return (
        <>
            <Header />
            <div className="blogs-container">
                <header className="blogs-header">
                    <h1>Our Blogs</h1>
                    <p>Stay updated with insights, tips, and stories from our team.</p>
                </header>

                <div className="blogs-grid">
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <img src={`data:image/jpeg;base64,${blog.image}`}
                                 alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.content.slice(0, 100)}...</p>
                                <div className="blog-meta">
                                    <span className="blog-date">{blog.date}</span> |{" "}
                                    <span className="blog-author">{blog.authorName}</span>
                                </div>
                                <button
                                    className="read-more"
                                    onClick={() => handleReadMore(blog.id)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

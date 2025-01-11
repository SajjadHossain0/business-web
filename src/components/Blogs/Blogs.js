import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

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

    const handleShare = (blog) => {
        if (navigator.share) {
            navigator.share({
                title: blog.title,
                text: blog.content.slice(0, 100), // Share the first 100 characters
                url: `${window.location.origin}/blogs/${blog.id}`, // Share blog URL
            })
                .then(() => console.log("Blog shared successfully!"))
                .catch((error) => console.error("Error sharing blog:", error));
        } else {
            alert("Web Share API is not supported in this browser.");
        }
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
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <div className="blog-card" key={blog.id}>
                                <img src={`data:image/jpeg;base64,${blog.image}`}
                                     alt={blog.title} className="blog-image"/>
                                <button
                                    className="share-icon"
                                    onClick={() => handleShare(blog)}
                                    title="Share this blog"
                                >
                                    🔗
                                </button>
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
                        ))
                    ) : (
                        <CustomLoading/>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

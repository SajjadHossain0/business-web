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

    useEffect(() => {
        // Using demo data instead of API call
        const demoBlogs =
            [
                {
                    "id": 1,
                    "title": "Top 5 Tech Trends in 2025",
                    "content": "Discover the latest trends shaping the technology landscape in 2025...",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGdZ-SaYlNNM319tb4mubAy35QnDllyCd9kqQ7Q57cbS1nqRtb_Mf4mfAvSVxd_6bCwo&usqp=CAU",
                    "date": "March 20, 2025",
                    "authorName": "John Tech"
                },
                {
                    "id": 2,
                    "title": "How AI is Revolutionizing Business",
                    "content": "Artificial intelligence is changing the way businesses operate...",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8DeNX0xNW_XneA9SlpwNO_q6DY62IrEW1pl9dafI-Ahh2Bi6CuVcX0xn-pYmBd-UnXs&usqp=CAU",
                    "date": "March 18, 2025",
                    "authorName": "Sarah AI"
                },
                {
                    "id": 3,
                    "title": "Cybersecurity Best Practices for 2025",
                    "content": "Learn how to protect your business from cyber threats...",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNfkuHrzhiewip8cr03koPfcoojkyt7w5vjGWJDcHEbDdR8tcEJRiRdg83cD2ET3QiBY&usqp=CAU",
                    "date": "March 15, 2025",
                    "authorName": "Michael Secure"
                },
                {
                    "id": 4,
                    "title": "The Future of Remote Work",
                    "content": "Remote work is here to stay. Here's how companies are adapting...",
                    "image": "https://img.freepik.com/free-vector/color-flow-background_23-2148619605.jpg",
                    "date": "March 10, 2025",
                    "authorName": "Emma Remote"
                },
                {
                    "id": 5,
                    "title": "Sustainable Business Practices in 2025",
                    "content": "Going green isn't just a trend—it's the future of business...",
                    "image": "https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148233991.jpg",
                    "date": "March 5, 2025",
                    "authorName": "David Green"
                }
            ]
        setBlogs(demoBlogs);
    }, []);


/*
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
*/

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
                                {/*<img src={`data:image/jpeg;base64,${blog.image}`}
                                     alt={blog.title} className="blog-image"/>*/}
                                <img src={blog.image}
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

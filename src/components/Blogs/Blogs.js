import React from "react";
import "./Blogs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Blogs() {

    const blogs = [
        {
            id: 1,
            image: "https://via.placeholder.com/300", // Replace with your blog images
            title: "5 Key Strategies for Successful Business Development",
            excerpt:
                "Explore five crucial strategies that businesses should adopt for sustainable growth and long-term success in today’s competitive market.",
            date: "Dec 27, 2024",
            author: "Michael Anderson",
            category: "Business Development",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300",
            title: "The Future of Sustainable Construction: Trends to Watch",
            excerpt:
                "As the construction industry evolves, sustainability becomes a key factor. Learn about the emerging trends that are shaping the future of green buildings.",
            date: "Dec 20, 2024",
            author: "Sophia Roberts",
            category: "Construction & Engineering",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300",
            title: "How Technology is Transforming the Construction Industry",
            excerpt:
                "Technology is revolutionizing the way we approach construction projects. Discover the tools and innovations that are streamlining processes and increasing efficiency.",
            date: "Dec 15, 2024",
            author: "James Carter",
            category: "Innovation in Business",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300", // Replace with your blog images
            title: "Building Client Relationships in Business Development",
            excerpt:
                "Building strong client relationships is at the core of business development. Learn how trust, communication, and personalized service can create lasting partnerships.",
            date: "Dec 10, 2024",
            author: "Isabella Green",
            category: "Business Development",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/300",
            title: "Maximizing ROI with Strategic Project Management",
            excerpt:
                "Project management is critical for maximizing return on investment. Here’s how you can optimize resources, timelines, and team performance for greater project success.",
            date: "Dec 5, 2024",
            author: "William Brown",
            category: "Project Management",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/300",
            title: "The Role of Leadership in Business Growth",
            excerpt:
                "Effective leadership is the foundation of any business’s success. Learn how strong leadership drives growth, fosters innovation, and inspires teams to reach their full potential.",
            date: "Dec 1, 2024",
            author: "Olivia Johnson",
            category: "Leadership & Growth",
        },
    ];


    return (
        <>
            <Header/>
            <div className="blogs-container">
                <header className="blogs-header">
                    <h1>Our Blogs</h1>
                    <p>Stay updated with insights, tips, and stories from our team.</p>
                </header>

                <div className="blogs-grid">
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <img src={blog.image} alt={blog.title} className="blog-image"/>
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <div className="blog-meta">
                                    <span className="blog-date">{blog.date}</span> |{" "}
                                    <span className="blog-author">{blog.author}</span>
                                </div>
                                <button className="read-more">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>

    );
}

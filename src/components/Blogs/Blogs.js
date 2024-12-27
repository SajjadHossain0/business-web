import React from "react";
import "./Blogs.css";

export default function Blogs() {

    const blogs = [
        {
            id: 1,
            image: "https://via.placeholder.com/300", // Replace with your blog images
            title: "10 Tips for Building a Secure E-commerce Website",
            excerpt:
                "Learn how to protect your e-commerce store from common security vulnerabilities.",
            date: "Dec 27, 2024",
            author: "Md. Sajjad Hossain",
            category: "E-commerce",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300",
            title: "Top React Features Every Developer Should Know",
            excerpt:
                "Explore the latest and greatest features React offers to streamline your development process.",
            date: "Dec 20, 2024",
            author: "Md. Sajjad Hossain",
            category: "Web Development",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300",
            title: "Case Study: Scaling an E-commerce Business",
            excerpt:
                "A deep dive into how we helped scale a client's e-commerce business to 5x growth.",
            date: "Dec 15, 2024",
            author: "Md. Sajjad Hossain",
            category: "Case Study",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/300", // Replace with your blog images
            title: "10 Tips for Building a Secure E-commerce Website",
            excerpt:
                "Learn how to protect your e-commerce store from common security vulnerabilities.",
            date: "Dec 27, 2024",
            author: "Md. Sajjad Hossain",
            category: "E-commerce",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/300",
            title: "Top React Features Every Developer Should Know",
            excerpt:
                "Explore the latest and greatest features React offers to streamline your development process.",
            date: "Dec 20, 2024",
            author: "Md. Sajjad Hossain",
            category: "Web Development",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/300",
            title: "Case Study: Scaling an E-commerce Business",
            excerpt:
                "A deep dive into how we helped scale a client's e-commerce business to 5x growth.",
            date: "Dec 15, 2024",
            author: "Md. Sajjad Hossain",
            category: "Case Study",
        },
    ];

    return (
        <div className="blogs-container">
            <header className="blogs-header">
                <h1>Our Blogs</h1>
                <p>Stay updated with insights, tips, and stories from our team.</p>
            </header>

            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
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
    );
}

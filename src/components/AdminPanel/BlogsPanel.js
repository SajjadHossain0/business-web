import React, { useState, useEffect } from "react";
import "./BlogsPanel.css";
import apiClient from "../API/apiClient";

export default function BlogsPanel() {
    const [formValues, setFormValues] = useState({
        blogImage: null,
        blogTitle: "",
        blogText: "",
        blogDate: "",
        blogAuthor: "",
    });
    const [blogs, setBlogs] = useState([]);

    // Fetch blogs
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

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    // Add blog
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", formValues.blogTitle);
        formData.append("content", formValues.blogText);
        formData.append("date", formValues.blogDate);
        formData.append("authorName", formValues.blogAuthor);
        formData.append("image", formValues.blogImage);

        try {
            const response = await apiClient.post("/blog/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Blog added successfully!");

            setFormValues({
                blogImage: null,
                blogTitle: "",
                blogText: "",
                blogDate: "",
                blogAuthor: "",
            });

            // Refresh blogs
            setBlogs((prevBlogs) => [...prevBlogs, response.data]);
        } catch (error) {
            alert("Failed to add the blog. Please try again.");
        }
    };

    // Delete blog
    const handleDelete = async (id) => {
        try {
            await apiClient.delete(`/blog/delete/${id}`);
            alert("Blog deleted successfully!");
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        } catch (error) {
            alert("Failed to delete the blog. Please try again.");
        }
    };

    return (
        <div className="blogs-panel">
            <h2 className="blogs-title">Manage Blogs</h2>
            <form className="blogs-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="blogImage">Blog Image</label>
                    <input
                        type="file"
                        id="blogImage"
                        name="blogImage"
                        accept="image/*"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="blogTitle">Title</label>
                    <input
                        type="text"
                        id="blogTitle"
                        name="blogTitle"
                        placeholder="Enter blog title"
                        className="form-control"
                        value={formValues.blogTitle}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="blogText">Content</label>
                    <textarea
                        id="blogText"
                        name="blogText"
                        rows="6"
                        placeholder="Write the blog content here"
                        className="form-control"
                        value={formValues.blogText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="blogDate">Date</label>
                    <input
                        type="date"
                        id="blogDate"
                        name="blogDate"
                        className="form-control"
                        value={formValues.blogDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="blogAuthor">Author Name</label>
                    <input
                        type="text"
                        id="blogAuthor"
                        name="blogAuthor"
                        placeholder="Enter author name"
                        className="form-control"
                        value={formValues.blogAuthor}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="blogs-submit-btn">
                    Add Blog
                </button>
            </form>

            <div className="blogs-list">
                <h3>Existing Blogs</h3>
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog.id} className="blog-item">
                            {blog.title}
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(blog.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

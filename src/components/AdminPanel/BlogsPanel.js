import React from "react";
import "./BlogsPanel.css";

export default function BlogsPanel() {
    return (
        <div className="blogs-panel">
            <h2 className="blogs-title">Manage Blogs</h2>
            <form className="blogs-form">
                {/* Blog Image */}
                <div className="form-group">
                    <label htmlFor="blogImage">Blog Image</label>
                    <input
                        type="file"
                        id="blogImage"
                        name="blogImage"
                        accept="image/*"
                        className="form-control"
                    />
                </div>

                {/* Blog Title */}
                <div className="form-group">
                    <label htmlFor="blogTitle">Title</label>
                    <input
                        type="text"
                        id="blogTitle"
                        name="blogTitle"
                        placeholder="Enter blog title"
                        className="form-control"
                    />
                </div>

                {/* Blog Text */}
                <div className="form-group">
                    <label htmlFor="blogText">Content</label>
                    <textarea
                        id="blogText"
                        name="blogText"
                        rows="6"
                        placeholder="Write the blog content here"
                        className="form-control"
                    ></textarea>
                </div>

                {/* Blog Date */}
                <div className="form-group">
                    <label htmlFor="blogDate">Date</label>
                    <input
                        type="date"
                        id="blogDate"
                        name="blogDate"
                        className="form-control"
                    />
                </div>

                {/* Blog Author Name */}
                <div className="form-group">
                    <label htmlFor="blogAuthor">Author Name</label>
                    <input
                        type="text"
                        id="blogAuthor"
                        name="blogAuthor"
                        placeholder="Enter author name"
                        className="form-control"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="blogs-submit-btn">
                    Add Blog
                </button>
            </form>
        </div>
    );
}

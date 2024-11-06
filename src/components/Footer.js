import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="page-container">

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

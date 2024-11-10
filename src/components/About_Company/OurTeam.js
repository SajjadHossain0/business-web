import React from "react";
import './OurTeam.css'
import ImageCard from "./ImageCard";

export default function OurTeam() {
    return (
        <section>
            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}}>Our Team</h1>

            <ImageCard
                imageUrl="https://via.placeholder.com/300x400"
                title="Name"
                text="Some text about them."
            />
        </section>
    )
}
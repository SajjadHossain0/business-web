import React from "react";
import ImageCard from "./ImageCard";


export default function BoardOfDirectors() {
    return (
        <section>

            <h1 style={{color: "#34495e", fontSize: 36, fontWeight: 700}}>Board Of Directors</h1>

            <ImageCard
                imageUrl="https://via.placeholder.com/300x400"
                title="Name"
                text="Some text about them."
            />
        </section>
    )
}
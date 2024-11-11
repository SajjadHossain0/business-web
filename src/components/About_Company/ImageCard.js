import React from "react";
import './ImageCard.css'

export default function ImageCard(props) {

    return (
        <div>
            <div className="image-card">
                <img src={props.imageUrl} alt={props.title}/>
                <h2>{props.title}</h2>
                <h5>{props.position}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
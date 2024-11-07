import React, {useState} from 'react';
import './ServiceCards.css'
import {FaGear} from "react-icons/fa6";
import {GiGearHammer} from "react-icons/gi";
import {GrTools} from "react-icons/gr";
import {FaTools} from "react-icons/fa";

export default function ServiceCards() {

    const [cards] = useState([
        {
            title: <GiGearHammer />,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
        },
        {
            title: <FaGear />,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
        },
        {
            title: <FaTools />,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta dolor sit amet consectetur adipisicing elit.`,
        },
        {
            title: <GrTools />,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
        }
    ]);

    return (
        <div className="responsiveCards">
            <section>
                <div className="container">
                    <h1>Our services</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                            <div key={i} className="card">
                                <h3 className="cardTitle">{card.title}</h3>
                                <p>{card.text}</p>
                                <div align="center">
                                    <button className="btn">Explore</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
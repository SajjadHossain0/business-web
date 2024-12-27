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
            text: `We specialize in delivering tailored software solutions that align perfectly with your business needs, ensuring efficiency and scalability.`,
        },
        {
            title: <FaGear />,
            text: `From sleek designs to robust backend solutions, we craft professional websites that elevate your online presence.`,

        },
        {
            title: <FaTools />,
            text: `Ensure your business runs smoothly with our dedicated support team, offering system monitoring and regular maintenance services.`,

        },
        {
            title: <GrTools />,
            text: `Our experts provide strategic advice to help you optimize technology investments and achieve business goals effectively.`,

        }
    ]);

    return (
        <div className="responsiveCards">
            <section>
                <div className="container">
                    <h1 style={{color:"#34495e", fontSize:36,fontWeight:700}}>Our services</h1>
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
import React, {useState} from 'react';
import './ServiceCards.css'

export default function ServiceCards() {

    const [cards] = useState([
        {
            title: "Card-1",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
        },
        {
            title: "Card-2",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
        },
        {
            title: "Card-3",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta dolor sit amet consectetur adipisicing elit.`,
        },
        {
            title: "Card-4",
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
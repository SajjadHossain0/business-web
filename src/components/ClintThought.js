import React, {useState} from 'react';
import './ClintThought.css'


export default function ClintThought() {

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
        },
        {
            title: "Card-5",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
        },
    ]);

    return (
        <div>
            <div className="responsiveCardsImg">
                <section>
                    <div className="container">
                        <h1>What our clint's thought</h1>
                        <div className="cardsImg">
                            {cards.map((card, i) => (
                                <div key={i} className="card customCard">

                                    <div style={{margin: 10}}>
                                        <img
                                            src="https://avatars.githubusercontent.com/u/102672264?v=4"
                                            height="100"
                                            width="100"
                                            style={{borderRadius: '50%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'}}
                                        />
                                    </div>


                                    <h3>{card.title}</h3>

                                    <p>{card.text}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
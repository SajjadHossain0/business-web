import React, {useState} from 'react';
import './ClintThought.css'


export default function ClintThought() {

    const [cards] = useState([
        {
            img: "https://via.placeholder.com/100",
            title: "John D.",
            text: `Working with this team has been a wonderful experience. They understood our vision and delivered a solution that truly meets our needs. Highly recommended!`
        },
        {
            img: "https://via.placeholder.com/100",
            title: "Sarah K.",
            text: `The team's professionalism and attention to detail were outstanding. They made the entire process seamless, and we are thrilled with the results.`
        },
        {
            img: "https://via.placeholder.com/100",
            title: "Mark L.",
            text: `Our collaboration was smooth from start to finish. The team provided innovative solutions and exceeded our expectations. Their expertise is top-notch.`
        },
        {
            img: "https://via.placeholder.com/100",
            title: "Emily P.",
            text: `Excellent work! The team not only delivered on time but also went above and beyond to ensure everything was perfect. I look forward to working with them again.`
        }
    ]);
    return (
        <div>
            <div className="responsiveCardsImg">
                <section>
                    <div className="container">
                        <h1 style={{color:"#34495e", fontSize:36,fontWeight:700}}>What our clint's thought</h1>
                        <div className="cardsImg">
                            {cards.map((card, i) => (
                                <div key={i} className="card customCard">

                                    <div style={{margin: 10}}>
                                        <img
                                            src={card.img}
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
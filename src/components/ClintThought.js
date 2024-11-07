import React, {useState} from 'react';
import './ClintThought.css'


export default function ClintThought() {

    const [cards] = useState([
        {
            img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/440858158_2022761424786825_1995451407088898789_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFGZqlvEvcsJT8FnxE4-DpbS_ebIFX4erJL95sgVfh6sn2m7UA9SkI-L3wd7GGtRpb0nYdoy3X794mZhBa3pb_z&_nc_ohc=PTtlnLLc2-0Q7kNvgFDCU4t&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AwlL4fseAzuhNHNTd5jGHh8&oh=00_AYC0oxp9ZJu5RxDGB5Rr6C9oqtCq8M_9hQUD-e1pk9xTdg&oe=67328E28",
            title: "Card-1",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta nam vero sapiente eius fugit distinctio
      pariatur? A, molestias.`,
        },
        {
            img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459228707_2116824118713888_4717607413967779237_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=7a06f5&_nc_eui2=AeEhI7D_R1smC7emQ1zLq6XzdLwyPUIixJV0vDI9QiLElW-SvEtCA6RMDFnkCfIjDqJbDcycHOC7ZOSfwwZ4Z-TL&_nc_ohc=tWYLjDNOcrcQ7kNvgEFFpoL&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AwlL4fseAzuhNHNTd5jGHh8&oh=00_AYAOVM-ujsGCaAm2qXpIg-t38bvia6ZxjjDKPopSAUnaTA&oe=67328C92",
            title: "Card-2",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
        },
        {
            img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/450010724_2067922036937430_195720533629024530_n.jpg?stp=c0.190.1473.1473a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=52bb43&_nc_eui2=AeFLiN-rIHHVBkfBoqqLgVYVSaoINma1w-1Jqgg2ZrXD7Zc9mF2n7kYUSRvlqZrObbI6F-lTMMwxhIV2X5Ke7HUJ&_nc_ohc=_PK7YQ9xBZcQ7kNvgFUYbyJ&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=AwlL4fseAzuhNHNTd5jGHh8&oh=00_AYC22ReHvnhBFiLO8pyHCD5wl0DdluX7YbCuHiBchgvkpg&oe=6732A57B",
            title: "Card-3",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta dolor sit amet consectetur adipisicing elit.`,
        },
        {
            img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/449311238_2064280463968254_6880502970315492370_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeH51UVczVAl7284WoyGRQm5f6eGQ3z79t5_p4ZDfPv23ifIJ5D2BqjsWSFkxa6_7ZImTr0_WHq-89uKONyNnU5x&_nc_ohc=vUsyqABP2QgQ7kNvgFQMqU6&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AwlL4fseAzuhNHNTd5jGHh8&oh=00_AYAy5awJaZlCvDYUMeQZc8OCrmccdZVUi2kcA8qT_1p9ow&oe=673291B0",
            title: "Card-4",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
      perspiciatis soluta`,
        }
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
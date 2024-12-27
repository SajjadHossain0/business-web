import React from "react";
import Header from "../Header/Header";
import Advertisement from "./Advertisement";
import ServiceCards from "./ServiceCards";
import ClintThought from "./ClintThought";
import About from "./About";
import advertise from "../images/img1.jpg"
import advertise1 from "../images/img2.jpg"
import advertise2 from "../images/img3.jpg"
import advertise3 from "../images/img4.jpg"
import advertise4 from "../images/img5.jpg"
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import ImageGrid from "./ImageGrid";

export default function Home() {

    const adImages = [
        advertise,
        advertise1,
        advertise2,
        advertise3,
        advertise4,
    ];

    return (
        <div>
            <Advertisement images={adImages} interval={3000}/>
            <About/>
            <ServiceCards/>
            <WhyChooseUs/>
            <ImageGrid/>
            <ClintThought/>
            <Contact/>
        </div>
    )
}

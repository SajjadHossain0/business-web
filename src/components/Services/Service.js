import React from "react";
import ServiceCards from "../Home/ServiceCards";
import ClintThought from "../Home/ClintThought";
import ImageGrid from "../Home/ImageGrid";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Service() {
    return(
        <div>
            <Header />
            <ServiceCards/>

            <ImageGrid/>
            <ClintThought/>
            <Footer/>
        </div>
    )
}

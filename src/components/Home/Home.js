import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Advertisement from "./Advertisement";
import ServiceCards from "./ServiceCards";
import ClintThought from "./ClintThought";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import ImageGrid from "./ImageGrid";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";

export default function Home() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchAdvertisements = async () => {
            try {
                const response = await apiClient.get("/advertisements/get-ads");
                const imageUrls = response.data.map(
                    (ad) => `data:image/jpeg;base64,${ad.image}`
                );
                setImages(imageUrls);
            } catch (error) {
                console.error("Error fetching advertisements:", error);
            }
        };

        fetchAdvertisements();
    }, []);

    return (
        <div>
            <Header/>
            <Advertisement images={images} interval={3000}/>
            <About/>
            <ServiceCards/>
            <WhyChooseUs/>
            <ImageGrid/>
            <ClintThought/>
            <Contact/>
            <Footer/>
        </div>
    )
}

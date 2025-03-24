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
                // Simulate an API response when backend is not running
                const demoAds = [
                    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvNaLzwssfWmwjIXcjepUmgpzXh_JtOv3mA&s" },
                    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfEmhyIZNopJ-uEDjy7oAs91728nmZr2uiw&s" },
                    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGILOOT0t3lDmDX7h809nPuRy3WElAKgGo6XZwfpcsdPqaD4lSv08DjpMJN6l2m9rR3Q&usqp=CAU" },
                ];

                // Uncomment this code if backend is available
                // const response = await apiClient.get("/advertisements/get-ads");
                // const demoAds = response.data;

                const imageUrls = demoAds.map((ad) => ad.image); // Directly use the URL
                setImages(imageUrls);
            } catch (error) {
                console.error("Error fetching advertisements:", error);
            }
        };

        fetchAdvertisements();
    }, []);

    /*for backend */
/*
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
*/

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

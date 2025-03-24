import React, {useEffect, useState} from "react";
import './Gallery.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import apiClient from "../API/apiClient";
import CustomLoading from "../CustomLoading";

export default function Gallery() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {

        const fetchGalleryItems = async () => {

            try{
                const demoGalleryItems = [
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUG7WzTAGM_i7J-pTDcHUliKe6q9EGqnbVA&s",
                        title: "a"
                    },
                 {
                        image: "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-82976.jpg",
                        title: "a"
                    },
                 {
                        image: "https://img.freepik.com/premium-photo/sea-green-with-black-vignette-abstract-luxury-gradient-blue-background_920742-453.jpg",
                        title: "a"
                    },
                 {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAtaXV2PUD8XzlQ-X5V9PYDjRDjmmJHDFEw&s",
                        title: "a"
                    },
                 {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqp4Yk6lulAv_oPQthOxnd3BU6GnfNwX_BGqfJF_4KNnpHSWwvdr2x88OZNECqcRceow&usqp=CAU",
                        title: "a"
                    },
                    {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXwCBETTqJRBpbb42prT0t8Q0sE2qteYUAQ&s",
                        title: "a"
                    },
                    {
                        image: "https://i.pinimg.com/736x/2c/ac/b7/2cacb7be3ed2ed868d0fa17128827958.jpg",
                        title: "a"
                    },
                 {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2ec-ugAAoE_apMMc1_zKUMvZ3Cnipbzm4w&s",
                        title: "a"
                    }

                    ]

                setGalleryItems(demoGalleryItems);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchGalleryItems();
    },[]);

/*
    useEffect(() => {
        const fetchGalleryItems = async () => {
            try {
                const response = await apiClient.get("/gallery/get-all");
                setGalleryItems(response.data);
            } catch (error) {
                console.error("Error fetching gallery items:", error);
            }
        };

        fetchGalleryItems();
    }, []);
*/

    return (
        <>
            <Header/>
            <div className="container">
                <h1 className="title" style={{color: "#34495e", fontSize: 36, fontWeight: 700}}>
                    Our Story
                </h1>

                <div className="photo-gallery">
                    {galleryItems.length > 0 ? (
                        galleryItems.map((item, index) => (
                            <div key={index} className="photo">
                                {/*<img src={`data:image/jpeg;base64,${item.image}`}
                                     alt={item.title}/>*/}
                                <img src={item.image}
                                     alt={item.title}/>

                            </div>
                        ))
                    ):(
                        <CustomLoading/>
                    )}
                </div>
            </div>
            <Footer/>
        </>

    );
}
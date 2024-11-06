import React from "react";
import Header from "./Header";
import Advertisement from "./Advertisement";
import ServiceCards from "./ServiceCards";
import ClintThought from "./ClintThought";

export default function Home() {

    const adImages = [
        'https://www.gingermediagroup.com/wp-content/uploads/2023/10/advertising.jpg',
        'https://www.gingermediagroup.com/wp-content/uploads/2023/10/advertising.jpg',
        'https://www.gingermediagroup.com/wp-content/uploads/2023/10/advertising.jpg',
        'https://www.gingermediagroup.com/wp-content/uploads/2023/10/advertising.jpg',
    ];

    return (
        <div>
            <Advertisement images={adImages} interval={3000} />
            <ServiceCards/>
            <ClintThought/>
        </div>
    )
}
import React from "react";
import OurMission from "./OurMission";
import OurVission from "./OurVission";
import OurTeam from "./OurTeam";
import BoardOfDirectors from "./BoardOfDirectors";
import OurStory from "./OurStory";
import ImageGrid from "../Home/ImageGrid";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function AboutCompany() {
    return (
        <div>
            <Header/>
            <OurMission/>
            <OurVission/>
            <OurStory/>
            <OurTeam/>
            <BoardOfDirectors/>
            <ImageGrid/>
            <Footer/>
        </div>
    )
}
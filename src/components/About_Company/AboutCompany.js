import React from "react";
import OurMission from "./OurMission";
import OurVission from "./OurVission";
import OurTeam from "./OurTeam";
import BoardOfDirectors from "./BoardOfDirectors";
import OurStory from "./OurStory";
import ImageGrid from "../Home/ImageGrid";

export default function AboutCompany() {
    return (
        <div>
            <OurMission/>
            <OurVission/>
            <OurStory/>
            <OurTeam/>
            <BoardOfDirectors/>
            <ImageGrid/>
        </div>
    )
}
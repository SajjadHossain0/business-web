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

/*

Hero Section
    Background Image or Video: Use a dynamic visual of construction sites, architectural designs, or environmental projects.
    Tagline: A brief tagline that captures CDL’s values, like "Building Tomorrow with Expertise Today."
    Call to Action (CTA): Buttons like “Our Services,” “Request a Quote,” and “Contact Us.”

About Section
    Brief Company Introduction: A concise paragraph about CDL, emphasizing its consulting and construction expertise and adherence to international standards.
    Core Values/Highlights: Add bullet points or icons to showcase core values like “Reliability,” “Innovation,” and “International Standards.”


Services Section
    Service Categories with Icons or Images: List main services (e.g., Civil, Architectural, Electrical) with a brief description for each. Include visuals or icons representing each service to enhance clarity.
    Project Specialties: Showcase specific project types like apartment buildings, commercial complexes, and industrial facilities with quick descriptions.

Why Choose Us Section

Portfolio or Case Studies
    Highlighted Projects: Showcase a few projects with images, descriptions, and key achievements. A “View All Projects” button could lead to a portfolio page.
    Success Metrics: Display relevant project stats or client satisfaction rates to build trust.

Testimonials or Client Reviews

Contact Information & CTA
    Simple Contact Form: Make it easy for visitors to request quotes or ask questions.
    Contact Details: Include phone, email, and physical address to make CDL accessible.
    Social Media Links: If CDL has a presence on platforms like LinkedIn or Facebook, link to these.

Footer
*/
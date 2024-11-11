import React from "react";
import ServiceCards from "../Home/ServiceCards";
import ClintThought from "../Home/ClintThought";
import ImageGrid from "../Home/ImageGrid";
export default function Service() {
    return(
        <div>
            <ServiceCards/>

            <ImageGrid/>
            <ClintThought/>
        </div>
    )
}

/*
Service Overview
A concise intro that outlines the range of services offered, targeting key areas of expertise and client needs.

Service Categories
Use cards or icons to represent each primary service with a brief description. Each card can lead to a dedicated page for more details.

Process or Workflow
Visualize your service process in steps (like “Planning,” “Development,” “Delivery”) to help clients understand how you work.

Benefits and Unique Value Proposition
Highlight what sets you apart, such as certifications, technologies used, and any guarantees (like timely delivery or support).

Client Testimonials
Adding client feedback here can build trust and showcase your track record.

Call to Action
Include a contact form or button for inquiries related to services, encouraging visitors to reach out.
*/
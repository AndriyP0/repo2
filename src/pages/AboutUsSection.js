import React, {useRef} from 'react';
import './AboutUsSection.css'
import UsIcons from "../components/UsIcons";

function AboutUsSection({priceRef,reviewsRef}) {
    const advantagesRef= useRef();
    const handleScrollTo = (ref) => {
        if (ref.current)
            ref.current.scrollIntoView({ behavior: "smooth" });
        };
    return (
        <div className="about-us-section">
            <div className="about-us-section-header">
                <button onClick={() => handleScrollTo(priceRef)} className="UsBtn">Ціна́</button>
                <button onClick={() => handleScrollTo(advantagesRef)} className="UsBtn"> Наші переваги</button>
                <button onClick={() => handleScrollTo(reviewsRef)} className="UsBtn">Відгуки</button>
            </div>
            <div ref={advantagesRef}>
                <UsIcons />
            </div>

        </div>
    );
}

export default AboutUsSection;
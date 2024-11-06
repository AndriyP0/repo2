import React from 'react';
import instagramAnimation from "./instagram.json"
import Lottie from "lottie-react";
import './Icons.css'
function Instagram(props) {
    return (
        <div className="icon-container">
            <Lottie animationData={instagramAnimation} loop={true} />
        </div>
    );
}

export default Instagram;
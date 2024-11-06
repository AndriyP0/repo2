import React from 'react';
import Lottie from "lottie-react";
import phoneAnimation from './phone.json'
import './Icons.css'
function Phone(props) {
    return (
        <div className="icon-container">
            <Lottie animationData={phoneAnimation} loop={true} />
        </div>
    );
}

export default Phone;
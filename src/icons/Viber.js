import React from 'react';
import Lottie from "lottie-react";
import viberAnimation from './viber.json'
import './Icons.css'
function Viber() {
    return (
        <div className="icon-container">
            <Lottie animationData={ viberAnimation } loop={ true } />
        </div>
    );
}

export default Viber;
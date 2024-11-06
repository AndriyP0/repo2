import React from 'react';
import  Lottie  from 'lottie-react';
import telegramAnimation from './telegram.json';
import './Icons.css'
function TelegramIcon() {
    return (
        <div className="icon-container">
            <Lottie animationData={ telegramAnimation} loop={true} />
        </div>
    );
}

export default TelegramIcon;
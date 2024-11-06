import React, { useState } from 'react';
import { TbHomePlus } from "react-icons/tb";
import TelegramIcon from "../icons/TelegramIcon";
import Viber from "../icons/Viber";
import Instagram from "../icons/Instagram";
import Phone from "../icons/Phone";
import './Header.css';

function Header({ homeRef, servicesRef, contactsRef }) {
    const [activeHeader, setActiveHeader] = useState(null);

    const handleScrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
        setActiveHeader(ref);
    };

    return (
        <header className="header">
            <div className="header-home">
                <TbHomePlus />
                <h1 className="CompanyName">Чисто+</h1>
            </div>
            <h1 onClick={() => handleScrollTo(homeRef)} className='CompanyName'
                style={{ color: activeHeader === homeRef ? '#2c5a8a' : 'inherit' }}>
                Головна
            </h1>
            <h1 onClick={() => handleScrollTo(servicesRef)} className="CompanyName"
                style={{ color: activeHeader === servicesRef ? '#2c5a8a' : 'inherit' }}>
                Послуги
            </h1>
            <h1 onClick={() => handleScrollTo(contactsRef)} className="CompanyName"
                style={{ color: activeHeader === contactsRef ? '#2c5a8a' : 'inherit' }}>
                Контакти</h1>
            <div className='headerDiv'>
                <p>Viber</p>
                <Viber />
                <p>TelegramIcon</p>
                <TelegramIcon />
                <p>Instagram</p>
                <Instagram />
                <p>Phone</p>
                <Phone />
            </div>
        </header>
    );
}

export default Header;

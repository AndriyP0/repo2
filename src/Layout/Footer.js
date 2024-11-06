import React from 'react';
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { TbHomePlus } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h1>Наші Контакти</h1>
                    <div className='contacts'>
                        <div className="contact-item">
                            <IoIosCall />
                            <p>+380994413334</p>
                        </div>
                        <div className="contact-item">
                            <IoIosCall />
                            <p>+380686387535</p>
                        </div>
                        <div className="contact-item">
                            <MdOutlineEmail />
                            <p>Andreopopovich@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="footer-center">
                    <h2>Ми працюємо в Івано-Франківську </h2>
                </div>

                <div className="footer-right">
                    <h3>Наші послуги:</h3>
                    <ul>
                        <li>Генеральне прибирання</li>
                        <li>Стандартне прибирання</li>
                        <li>Прибирання після ремонту</li>
                        <li>Миття вікон</li>
                        <li>Хімчистка</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-info">
                    <TbHomePlus />
                    <p>2024, Чисто+</p>
                </div>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

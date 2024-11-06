import React from 'react';
import './Reviews.css';
import { FaStar } from "react-icons/fa6";

const reviews = [
    {
        id: 1,
        name: "Олена",
        text: "Чудова робота! Ваша команда зробила наш дім чистим і затишним.",
        rating: 5,
    },
    {
        id: 2,
        name: "Максим",
        text: "Відмінний сервіс, рекомендую всім!",
        rating: 4,
    },
    {
        id: 3,
        name: "Анна",
        text: "Прибирання пройшло швидко і якісно. Дякую!",
        rating: 5,
    },
    {
        id: 4,
        name: "Ігор",
        text: "Професійний підхід і дуже приємний персонал.",
        rating: 4,
    },
    {
        id: 5,
        name: "Марія",
        text: "Мені сподобалося, як все було організовано.",
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h2>Відгуки наших клієнтів</h2>
            <div className="reviews-scroll">
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <div className="review-header">
                            <h3>{review.name}</h3>
                            <div className="stars">
                                {Array.from({ length: review.rating }).map((_, index) => (
                                    <FaStar key={index} className="star" />
                                ))}
                            </div>
                        </div>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;

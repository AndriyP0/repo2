import React from 'react';
import './HomePage.css'
function HomePage(props) {
    return (
        <div className="HomePage">
            <h1 className='HomePage-name'>Ласкаво просимо до нашої клінінгової компанії!</h1>
            <p className='p-home'>Ми пропонуємо широкий спектр клінінгових послуг для вашого дому та офісу.
                Наша команда професіоналів готова забезпечити чистоту та комфорт у будь-якому приміщенні.</p>
            <div className="call-to-action">
                <h2>Замовте послугу сьогодні!</h2>
                <button className="cta-button">Зв'язатися з нами</button>
            </div>
        </div>
    );
}

export default HomePage;
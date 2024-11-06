import React from 'react';
import "./Service.css";

function Service({ name, picture,description }) {
    return (
        <div className="catalog-item">
            <img src={picture} alt={name} />
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Замовити</button>
        </div>
    );
}

export default Service;

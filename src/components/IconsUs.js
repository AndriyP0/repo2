
import React from 'react';
import './IconsUs.css';

function IconsUs({ icon: Icon, title, description }) {
    return (
        <div >
            <Icon className="icon" />
            <h1>{title}</h1>
            <p className='p-icon'>{description}</p>
        </div>
    );
}

export default IconsUs;

import React, {useState} from 'react';

function HoneMenu(props) {
    const [activeHome, setActiveHome] = useState(null);
    function handleHeaderClickForHome(header) {
        return () => {
            setActiveHome(header); // Зберегти активний заголовок
        };
    }
    return (
        <ul>
            <li onClick={handleHeaderClickForHome('price')}
                style={{color: activeHome === 'price' ? '#ff0000' : 'inherit'}}
            >Ціна</li>
            <li onClick={handleHeaderClickForHome('advantages')}
                style={{color: activeHome === 'advantages' ? '#ff0000' : 'inherit'}}
            >Переваги</li>
            <li onClick={handleHeaderClickForHome('process')}
                style={{color: activeHome === 'process' ? '#ff0000' : 'inherit'}}
            >Процес</li>
        </ul>
    )}

export default HoneMenu;
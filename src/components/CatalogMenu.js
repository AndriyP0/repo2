import React, {useState} from 'react';

function CatalogMenu(props) {
    const [activeCatalog, setActiveCatalog] = useState(null);
    function handleHeaderClickForCatalog(header) {
        return () => {
            setActiveCatalog(header); // Зберегти активний заголовок
        };
    }
    return (
        <ul>
            <li onClick={handleHeaderClickForCatalog('general')}
                style={{color: activeCatalog === 'general' ? '#ff0000' : 'inherit'}}
            >Генеральне Прибирання</li>
            <li onClick={handleHeaderClickForCatalog('standart')}
                style={{color: activeCatalog === 'standart' ? '#ff0000' : 'inherit'}}
            >Cтандартне Прибирання</li>
            <li onClick={handleHeaderClickForCatalog('repair')}
                style={{color: activeCatalog === 'repair' ? '#ff0000' : 'inherit'}}
            >Прибирання після ремонту</li>
            <li onClick={handleHeaderClickForCatalog('window')}
                style={{color: activeCatalog === 'window' ? '#ff0000' : 'inherit'}}
            >Миття вікон</li>
            <li onClick={handleHeaderClickForCatalog('dry-cleaners')}
                style={{color: activeCatalog === 'dry-cleaners' ? '#ff0000' : 'inherit'}}
            >Xімчистка</li>
            <li onClick={handleHeaderClickForCatalog('constantly')}
                style={{color: activeCatalog === 'constantly' ? '#ff0000' : 'inherit'}}
            >Постійне прибирання</li>
        </ul>
    )}


export default CatalogMenu;
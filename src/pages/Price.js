import React from 'react';
import "./Price.css";

function Price() {
    const prices = [
        { service: "Генеральне прибирання", price: "2000 грн", description: "Комплексне прибирання всіх приміщень, включаючи кухню і ванну." },
        { service: "Стандартне прибирання", price: "1500 грн", description: "Прибирання без глибокого очищення." },
        { service: "Прибирання після ремонту", price: "3000 грн", description: "Видалення пилу, сміття та забруднень після ремонтних робіт." },
        { service: "Постійне прибирання", price: "1000 грн", description: "Регулярне обслуговування, знижки при підписці." }
    ];

    const windowServices = [
        { service: " Стандартне ", price: "500 грн", description: "Чистка вікон з обох сторін." },
        { service: "Після ремонту", price: "600 грн", description: "Видалення забруднень після ремонтних робіт." }
    ];

    const dryCleaning = [
        { service: "Диван стандарт", price: "600 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Диван кутовий", price: "800 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Диван кутовий нестандартний", price: "1000 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Подушка дивана", price: "100 грн", description: "Глибока очистка м'яких меблів." },
        { service: "М'яке крісло", price: "400 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Пуф", price: "200 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Крісло без спинки", price: "100 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Крісло зі спинкою", price: "150 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Двоспальний матрац", price: "800 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Односпальний матрац", price: "500 грн", description: "Глибока очистка м'яких меблів." },
        { service: "Килим з коротким ворсом", price: "95 грн", description: "Глибока очистка килимів." },
        { service: "Килим з довгим ворсом", price: "115 грн", description: "Глибока очистка килимів." },
    ];
    const  AddServices=[
        {service:"Миття холодильника",price:"300 грн",description:"Очищення холодильника: всередині та зовні."},
        {service:"Миття кухонних тумб та шафок всередині",price:"30грн/шт",description:"внутрішній догляд"},
        {service:"Догляд за шторами",price:"100грн/шт",description:" зняття та прасування."},
        {service:"Миття віконних жалюзів",price:"100грн/шт",description:"Чистота і свіжість ваших жалюзів."},
        {service: "Прасування одягу",price:"250грн/год",description:"Швидке і ефективне прасування."},
        {service:"Cкладання одягу у шафі",price:"200грн/год",description:"Організація одягу для зручності."},

    ]

    return (
        <div className="detailed-price-list-container">
            <h1 className="price-h1"> Прайс на послуги</h1>
            <ServiceTable title="Основні послуги" data={prices} />
            <ServiceTable title="Миття вікон" data={windowServices} />
            <ServiceTable title="Хімчистка" data={dryCleaning} />
            <ServiceTable title="Додаткові послуги" data={AddServices} />
        </div>
    );
}

function ServiceTable({ title, data }) {
    return (
        <>
            <h1 className='namePrice'>{title}</h1>
            <table className="price-table">
                <thead>
                <tr>
                    <th>Послуга</th>
                    <th>Ціна</th>
                    <th>Опис</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.service}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default Price;

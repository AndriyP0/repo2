import React from 'react';
import "./Catalog.css";
import Service from "../components/Service";

function Catalog(props) {
    const services = [
        {
            picture: "https://media.angi.com/s3fs-public/Person-cleaning-kitchen-sink.jpg",
            name: "Генеральне прибирання",
            description:"Комплексне, ретельне та глибоке прибирання приміщення або об'єкта з метою повного видалення бруду, пилу, плям, а також проведення робіт з відновлення та оновлення простору." +
                "Генеральне прибирання проводиться рідше, зазвичай раз на пів року або рік, і воно спрямоване на поглиблене очищення приміщення та підтримання його високого стандарту чистоти."
        },
        {
            picture: "https://uploads.prod01.sydney.platformos.com/instances/582/property_uploads/modules/website/cleaning_services/service_image/755a6e64-a55b-43c0-8a1a-74cfbe6985e6/Carpet%20%26%20Upholstery%20Cleaning.webp",
            name: "Стандартне прибирання",
            description:"Це базовий процес очищення приміщення, який включає видалення пилу, миття підлог, протирання поверхонь та організацію порядку. " +
                "Під час стандартного прибирання проводиться очищення основних зон, таких як кухня, ванна кімната та вітальня. Ця послуга підходить для регулярного обслуговування, щоб підтримувати чистоту та охайність вашого простору. " +
                "Стандартне прибирання виконується швидко та ефективно, забезпечуючи комфорт і затишок у вашому домі."

        },
        {
            picture: "https://chystotut.com.ua/wa-data/public/shop/themes/topstyle/img/cleaning-8.jpg",
            name: "Прибирання після ремонту",
            description:"Комплексні роботи з очищення і видалення залишків будівельних матеріалів та інших слідів, які залишилися після проведення будівельних, ремонтних або оновлювальних робіт у приміщенні.  " +
                "Цей тип прибирання вимагає особливої уваги та ретельності, оскільки після ремонту може залишитися багато пилу, бруду, залишків будівельних матеріалів та інших забруднень."

        },
        {
            picture: "https://i1.poltava.to/uploads/2021/12/2021-12-06/window.jpg",
            name: "Миття вікон",
            description:"Це процес очищення скла на вікнах та вітринах від пилу, бруду, слідів води або інших забруднень для покращення прозорості та зовнішнього вигляду. Це може бути важливо як для домашніх приміщень, так і для комерційних об'єктів, де чисте та прозоре скло грає важливу роль в естетиці та представленні. " +
                "Може виконуватися як регулярно, для підтримання чистоти приміщення, так і після ремонтів чи будівельних робіт, коли скло може бути особливо забрудненим."

        },
        {
            picture: "https://www.cleancleaning.com.ua/wp-content/uploads/2020/11/1831881274-himchistka-scaled.jpg",
            name: "Хімчистка",
            description:"Це процес очищення та видалення забруднень, плям, пилу тощо з оббиття м'яких меблів, таких як дивани, крісла, ковдри, подушки та інші текстильні частини меблів. При цьому використовуються хімічні засоби та спеціальні технології для ефективного очищення тканин. Частота хімчистки може залежати від ступеня забруднення та індивідуальних потреб. " +
                "Правильна хімчистка може покращити вигляд м'яких меблів та подовжити термін їх служби."

        },
        {
            picture: "https://vikna.if.ua/assets/gallery/2018/08/04/88161/uborka-v-dome__large.jpg",
            name: "Постійне прибирання",
            description: "Регулярні роботи з утримання приміщення в чистоті та порядку після базового (генерального) прибирання. " +
                "Основні завдання прибирання такого типу можуть варіюватися залежно від виду приміщення та його функціонального призначення. " +
                "Проводиться на щоденній, щотижневій або щомісячній основі для того, щоб забезпечити постійну чистоту та охайність приміщення. "
        }
    ];

    return (
        <div>
            <div  className="content-h1">
                <h1>Наші послуги</h1>
            </div>
            <div  className="catalog-container">
                {/* Відображення сервісів */}
                {services.map((service, index) => (
                    <Service
                        key={index} // Використовуємо індекс як ключ
                        picture={service.picture}
                        name={service.name}
                        description={service.description}
                    />
                ))}
            </div>
        </div>

    );
}

export default Catalog;

import React from 'react';
import  {IoPeopleCircleSharp}  from "react-icons/io5";
import { GiVacuumCleaner } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { PiAsclepius } from "react-icons/pi";





import IconsUs from "./IconsUs";
import './UsIcons.css'
function UsIcons(props) {
    return (
        <div>
            <div className="iconsUs">
                <IconsUs icon={IoPeopleCircleSharp}
                         title="Надійний персонал"
                         description="Наші співробітники навчені та відповідають кваліфікаційним нормам"/>

                <IconsUs icon={PiAsclepius}
                         title="Гарантія якості"
                         description="Ми використовуємо професійне обладнання та хімічні засоби"/>

                <IconsUs icon={LuMessagesSquare}
                         title="Ефективний менеджмент"
                         description="Налагоджені процеси від прийнятого дзвінка до здачі робіт клієнту"/>
            </div>
            <h1 className='procces'>Як відбувається процес?</h1>
            <div className="iconsUs">
                <IconsUs icon={IoIosCall}
                title='Дзвінок'
                description='Узгодження робіт, вартості та термінів виконання'/>

                <FaAngleDoubleRight className='iconn'  />

                <IconsUs icon={GiVacuumCleaner}
                title='Послуга'
                description='Команда клінерів виконує роботи під контролем менеджера'/>

                <FaAngleDoubleRight className='iconn' />

                <IconsUs icon={GrStatusGood}
                title='Результат'
                description="Робота виконана і Ви можете насолодитися чистотою"/>
            </div>
        </div>
    );
}

export default UsIcons;
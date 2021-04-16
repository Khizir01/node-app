import React from 'react';
import footer from "./footer.svg";
function Footer(props) {
    return (
        <div className="foot">
            <img src ={footer} alt ="logotype"/> 
            <div>
            Партнерам
           Разработчикам
           Вакансии 
            </div>
            <div>
            ООО “интукод”, 2020г.
            </div>
        </div>
    );
}

export default Footer;
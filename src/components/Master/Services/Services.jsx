import React from 'react';
import s from './Services.module.css';

const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.name__services}>
                <p>Цены на услуги</p>
            </div>
                <table>
                    <tr>
                        <td>Брови</td>
                        <td>500 р</td>
                    </tr>
                    <tr>
                        <td>Ногти</td>
                        <td>700 р</td>
                    </tr>
                    <tr>
                        <td>Педикюр</td>
                        <td>800 р</td>
                    </tr>
                    <tr>
                        <td>Маникюр</td>
                        <td>345 р</td>
                    </tr>
                    <tr>
                        <td>Укладка волос</td>
                        <td> 450 р</td>
                    </tr>
                    <tr>
                        <td>Депиляция</td>
                        <td> 550 р</td>
                    </tr>
                    <tr>
                        <td>Макияж</td>
                        <td>450 р</td>
                    </tr>
                    <tr>
                        <td>Мужская стрижка</td>
                        <td> 870 р</td>
                    </tr>
                </table>
        </div>
    );
}

export default Services;
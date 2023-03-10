import React from 'react';
import { Link } from 'react-router-dom';
import s from './OneMessage.module.css';

const OneMessage = (props) => {
    return (
            <div className={s.dialogs__item__message}>
                <div className={s.item__avatar}>
                    <img src="https://vraki.net/sites/default/files/inline/images/29_21.jpg" alt="" />
                </div>
                <div className={s.item__message}>
                    <p>{props.message}</p>
                    <div className={s.to__answer}>
                    <Link patch="#"><span>Ответить</span></Link>
                </div>
                </div>
            </div>
    );
}

export default OneMessage;
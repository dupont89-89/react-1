import React from 'react';
import { Link } from 'react-router-dom';
import s from './OneMessage.module.css';

const OneMessage = (props) => {
    return (
        <div>
            <div className={s.dialogs__item__message}>
                <div className={s.item__avatar}>
                    <img src="https://vraki.net/sites/default/files/inline/images/29_21.jpg" alt="" />
                </div>
                <div className={s.item__message}>
                    <div className={s.message__status}>
                        <span>{props.messagesRead}</span>
                    </div>
                    <p>{props.message}</p>
                    <div className={s.to__answer}>
                        <Link patch="#"><span>Ответить</span></Link>
                    </div>
                </div>
            </div>
            <div className={s.dialogs__item__messageFriends}>
            <div className={s.item__messageFriends}>
                <div className={s.message__status}>
                    <span>{props.messagesRead}</span>
                </div>
                <p>{props.messageFriends}</p>
                <div className={s.to__answer}>
                    <Link patch="#"><span>Ответить</span></Link>
                </div>
            </div>
            <div className={s.item__avatar}>
                <img src="https://android-obzor.com/wp-content/uploads/2022/03/z_f88c8749.jpg" alt="" />
            </div>
        </div>
        </div>
    );
}

export default OneMessage;
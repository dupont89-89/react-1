import React from 'react';
import s from './Dialogs.module.css';
import Item from '../Item/Item';
import Messages from '../Messages/Message_Container/Messages';

const Dialogs = () => {
    return (
        <div className={s.dialogs__container}>
            <h1>Мои диалоги</h1>
            <Item />
            <Messages />
        </div>
    );
}

export default Dialogs;
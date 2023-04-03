import React from 'react';
import s from './Dialogs.module.css';
import MessagesContainer from '../Messages/Message_Container/MessagesContainer';
import ItemContainer from '../Item/ItemContainer';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs__container}>
            <ItemContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;
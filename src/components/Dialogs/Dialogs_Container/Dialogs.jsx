import React from 'react';
import s from './Dialogs.module.css';
import Item from '../Item/Item';
import Messages from '../Messages/Message_Container/Messages';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs__container}>
            <Item dialogsData={props.state.dialogsData}  />
            <Messages sendMessage={props.sendMessage} newMessage={props.state.newMessage} sendNewMessage={props.sendNewMessage} messagesData={props.state.messagesData} />
        </div>
    );
}

export default Dialogs;
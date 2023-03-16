import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {

    let messagesUser = props.messagesData
        .map(messages => <OneMessage id={messages.id} message={messages.message} messageFriends={messages.messageFriends} messagesRead={messages.messagesRead} />);

    return (
        <div className={s.dialogs__message}>
            <h1>Мои диалоги</h1>
            <NewMessage sendMessage={props.sendMessage} sendNewMessage={props.sendNewMessage} newMessage={props.newMessage} />
            {messagesUser}
        </div>
    );
}

export default Messages;
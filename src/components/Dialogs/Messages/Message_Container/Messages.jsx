import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import { Navigate, redirect } from 'react-router-dom';

const Messages = (props) => {

    let messagesUser = props.messagesData
        .map(messages => <OneMessage id={messages.id} key={messages.id} message={messages.message} messageFriends={messages.messageFriends} messagesRead={messages.messagesRead} />);

    // if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={s.dialogs__message}>
            <h1>Мои диалоги</h1>
            <NewMessageContainer />
            {messagesUser}
        </div>
    );
}

export default Messages;
import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Messages = (props) => {

    let messagesUser = props.messagesData
        .map(messages => <OneMessage id={messages.id} message={messages.message} messageFriends={messages.messageFriends} messagesRead={messages.messagesRead} />);

    return (
        <div className={s.dialogs__message}>
            <h1>Мои диалоги</h1>
            <NewMessageContainer />
            {messagesUser}
        </div>
    );
}

export default Messages;
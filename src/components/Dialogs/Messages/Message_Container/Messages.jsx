import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';

const Messages = (props) => {
    
    let messagesUser = props.messagesData
    .map( messages  => <OneMessage id={messages.id} message={messages.message} messagesRead={messages.messagesRead} />);
    
    return (
        <div className={s.dialogs__message}>
            {messagesUser}
        </div>
    );
}

export default Messages;
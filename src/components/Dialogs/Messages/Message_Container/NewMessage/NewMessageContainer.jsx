import React from 'react';
import { sendNewMessage } from '../../../../../redux/message-reducer';
import { sendMessage } from '../../../../../redux/message-reducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

    let actionNewMessage = () => {
        props.dispatch(sendMessage());
    }

    let newChangeMessage = (text) => {
        let action = sendNewMessage(text)
        props.dispatch(action);
    }

    return (
        <NewMessage newMessage={props.newMessage} actionNewMessage={actionNewMessage} newChangeMessage={newChangeMessage} />
    );
}

export default NewMessageContainer;



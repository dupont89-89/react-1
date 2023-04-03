import React from 'react';
import { sendNewMessage } from '../../../../../redux/message-reducer';
import { sendMessage } from '../../../../../redux/message-reducer';
import NewMessage from './NewMessage';
import StoreContext from '../../../../../redux/store-context';

const NewMessageContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let actionNewMessage = () => {
                    store.dispatch(sendMessage());
                }

                let newChangeMessage = (text) => {
                    let action = sendNewMessage(text)
                    store.dispatch(action);
                }

                let newMessage = store.getState().messagesPage.newMessage;

                return <NewMessage newMessage={newMessage} actionNewMessage={actionNewMessage} newChangeMessage={newChangeMessage} />
            }}
        </StoreContext.Consumer>
    );
}

export default NewMessageContainer;



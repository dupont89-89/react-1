import React from 'react';
import Messages from './Messages';
import StoreContext from '../../../../redux/store-context';

const MessagesContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store =>
                <Messages messagesData={store.getState().messagesPage.messagesData} />
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;
import React from 'react';
import s from './Dialogs.module.css';
import Item from '../Item/Item';
import Messages from '../Messages/Message_Container/Messages';

const Dialogs = (props) => {
 
    let state = props.store.getState().messagesPage

    return (
        <div className={s.dialogs__container}>
            <Item dialogsData={state.dialogsData}  />
            <Messages dispatch={props.store.dispatch}  newMessage={state.newMessage} messagesData={state.messagesData} />
        </div>
    );
}

export default Dialogs;
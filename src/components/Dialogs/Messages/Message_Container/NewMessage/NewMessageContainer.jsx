import React from 'react';
import { sendNewMessage } from '../../../../../redux/message-reducer';
import { sendMessage } from '../../../../../redux/message-reducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessage: state.messagesPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        actionNewMessage: () => {
            dispatch(sendMessage());
        },
        newChangeMessage: (text) => {
            let action = sendNewMessage(text)
            dispatch(action);
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) (NewMessage);

export default NewMessageContainer;



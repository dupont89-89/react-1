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

const NewMessageContainer = connect(mapStateToProps, {sendNewMessage, sendMessage}) (NewMessage);

export default NewMessageContainer;

// let mapDispatchToProps = (dispatch) => {
//     return {
//         actionNewMessage: () => {
//             dispatch(sendMessage());
//         },
//         newChangeMessage: (text) => {
//             let action = sendNewMessage(text)
//             dispatch(action);
//         }
//     }
// }



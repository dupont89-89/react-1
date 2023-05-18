import React from 'react';
import { sendMessage } from '../../../../../redux/message-reducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {

    }
}

const NewMessageContainer = connect(mapStateToProps, { sendMessage })(NewMessage);

export default NewMessageContainer;



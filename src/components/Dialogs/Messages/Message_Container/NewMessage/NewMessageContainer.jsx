import React from 'react';
import s from './NewMessage.module.css';
import { sendNewMessage } from '../../../../../redux/message-reducer';
import { sendMessage } from '../../../../../redux/message-reducer';

const NewMessageContainer = (props) => {

    let newMessageDialogs = React.createRef();

    let actionNewMessage = () => {
        props.dispatch(sendMessage());
        props.updateNewPostText('');
    }

    let newChangeMessage = () => {
        let text = newMessageDialogs.current.value;
        props.dispatch(sendNewMessage(text));
    }

    return (
        <div className={s.news__message}>
            <div className={s.area__news__message}>
                <textarea onChange={newChangeMessage} value={props.newMessage} ref={newMessageDialogs} />
            </div>
            <button onClick={actionNewMessage}><span>Отправить сообщение</span></button>
        </div>
    );
}

export default NewMessageContainer;



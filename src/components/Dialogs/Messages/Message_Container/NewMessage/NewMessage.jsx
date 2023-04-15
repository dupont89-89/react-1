import React from 'react';
import s from './NewMessage.module.css';

const NewMessage = (props) => {

    let newMessageDialogs = React.createRef();

    let actionNewMessage = () => {
        props.sendMessage();
    }

    let newChangeMessage = () => {
        let text = newMessageDialogs.current.value;
        props.sendNewMessage(text)
    }

    return (
        <div className={s.news__message}>
            <div className={s.area__news__message}>
                <textarea placeholder='Твои друзья ждут сообщений' onChange={newChangeMessage} value={props.newMessage} ref={newMessageDialogs} />
            </div>
            <button onClick={actionNewMessage}><span>Отправить сообщение</span></button>
        </div>
    );
}

export default NewMessage;



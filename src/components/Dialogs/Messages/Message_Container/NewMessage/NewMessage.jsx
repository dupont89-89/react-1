import React from 'react';
import s from './NewMessage.module.css';

const newMessage = (props) => {
    debugger;
    let newMessageDialogs = React.createRef();
    
    let newChangeMessage = () => {
        let text = newMessageDialogs.current.value;
        props.sendNewMessage(text);
    }

    let actionNewMessage = () => {
        props.sendMessage();
        props.updateNewPostText('');
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

export default newMessage;



import React from 'react';
import s from './NewMessage.module.css';

const newMessage = (props) => {
        
    let newMessageDialogs = React.createRef();

    let actionNewMessage = () => {
        let text = newMessageDialogs.current.value
        alert (text);
    }
    
        return (
        <div className={s.news__message}>
            <div className={s.area__news__message}>
                <textarea ref={newMessageDialogs}></textarea>
            </div>
            <button onClick={actionNewMessage}><span>Отправить сообщение</span></button>
        </div>
    );
}

export default newMessage;
import React from 'react';
import s from './NewMessage.module.css';
import { Field, reduxForm } from 'redux-form'

const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newmessage"
                component="textarea"
                type={"text"}
                placeholder='вои друзья ждут сообщений'
                className={s.text__new__posts} />
            <input placeholder='Отправить сообщение' className={s.btn__send__posts} type="submit" />
        </form>
    );
}

const NewMessageRedaxForm = reduxForm({
    form: 'newmessage'
})(NewMessageForm)

const NewMessage = (props) => {

    const onSubmit = (values) => {
        return props.sendMessage(values.newmessage)
    }

    return (
        <div>
            <NewMessageRedaxForm onSubmit={onSubmit} />
        </div>
    );
}

export default NewMessage;



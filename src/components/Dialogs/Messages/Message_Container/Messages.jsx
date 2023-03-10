import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';

const Messages = () => {

    let messagesData = [
        {id: 1,  message: 'Приветик это же ВАНЯ!. Привет, Валентина. Как твои дела?'},
        {id: 2,  message: 'Напрямую сделать треугольник средствами CSS нельзя, поэтому доступны два метода, позволяющих его добавить — через border и transform. ... В примере 1 показано добавление треугольника к блоку через псевдоэлемент'},
        {id: 3,  message: 'Треугольники с рамкой. Примеры как сделать различные вариации треугольников с помощью CSS-свойства border. ... В продолжении первой части, примеры как добавить стрелки к блоку с рамкой. Используются оба псевдо-элемента'},
        {id: 4,  message: 'ХАХ ХА АХ'},
        {id: 5,  message: 'Откуда берется треугольник? Все контейнеры в HTML изначально'}
    ]

    return (
        <div className={s.dialogs__message}>
                <OneMessage id={messagesData [0] .id} message={messagesData [0] .message} />
                <OneMessage id={messagesData [1] .id} message={messagesData [1] .message} />
                <OneMessage id={messagesData [2] .id} message={messagesData [2] .message} />
                <OneMessage id={messagesData [3] .id} message={messagesData [3] .message} />
                <OneMessage id={messagesData [4] .id} message={messagesData [4] .message} />
        </div>
    );
}

export default Messages;
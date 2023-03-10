import React from 'react';
import s from './Messages.module.css';
import OneMessage from '../OneMessage/OneMessage';

const Messages = () => {

    let messagesData = [
        {id: 1, messagesRead: 'Прочитано', message: 'Приветик это же ВАНЯ!. Привет, Валентина. Как твои дела?'},
        {id: 2, messagesRead: 'Ожидает',  message: 'Напрямую сделать треугольник средствами CSS нельзя, поэтому доступны два метода, позволяющих его добавить — через border и transform. ... В примере 1 показано добавление треугольника к блоку через псевдоэлемент'},
        {id: 3, messagesRead: 'Читает',  message: 'Треугольники с рамкой. Примеры как сделать различные вариации треугольников с помощью CSS-свойства border. ... В продолжении первой части, примеры как добавить стрелки к блоку с рамкой. Используются оба псевдо-элемента'},
        {id: 4, messagesRead: 'Прочитано',  message: 'ХАХ ХА АХ тф даешь'},
        {id: 5, messagesRead: 'Пишет',  message: 'Откуда берется треугольник? Все контейнеры в HTML изначально'}
    ]

    return (
        <div className={s.dialogs__message}>
                <OneMessage id={messagesData [0] .id} message={messagesData [0] .message} messagesRead={messagesData [0] .messagesRead} />
                <OneMessage id={messagesData [1] .id} message={messagesData [1] .message} messagesRead={messagesData [1] .messagesRead}  />
                <OneMessage id={messagesData [2] .id} message={messagesData [2] .message} messagesRead={messagesData [2] .messagesRead}  />
                <OneMessage id={messagesData [3] .id} message={messagesData [3] .message} messagesRead={messagesData [3] .messagesRead}  />
                <OneMessage id={messagesData [4] .id} message={messagesData [4] .message} messagesRead={messagesData [4] .messagesRead}  />
        </div>
    );
}

export default Messages;
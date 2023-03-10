import React from 'react';
import s from './Posts.module.css';
import Posts_one from './Posts_one';

const Posts_old = () => {

    let postData = [
        { id: 1, number_like: 7, message: 'Привет, Валентина. Как твои дела?' },
        { id: 2, number_like: 10, message: 'Ирина. Как ты?' },
        { id: 3, number_like: 120, message: 'Описание свойства box-shadow. Примеры тени для блока (внешняя, внутренняя, с одной стороны), эффекты для тени при наведении, анимация тени. ... 2.19. CSS3-тень блока. Опубликовано: 9 ноября 2016 Обновлено: 31 декабря 2019 6 комментариев.' },
        { id: 4, number_like: 18, message: 'Вау, вау. ТЫ чего' },
        { id: 5, number_like: 13, message: 'CSS-свойство box-shadow добавляет тень к элементу. Через запятую можно задать несколько теней. Тень описывается смещениями по оси X и Y относительно' },
    ]

    return (
        <div className={s.old__wall__posts}>
            <Posts_one id={postData[0].id} message={postData[0].message} number_like={postData[0].number_like} />
            <Posts_one id={postData[1].id} message={postData[1].message} number_like={postData[1].number_like} />
            <Posts_one id={postData[2].id} message={postData[2].message} number_like={postData[2].number_like} />
            <Posts_one id={postData[3].id} message={postData[3].message} number_like={postData[3].number_like} />
            <Posts_one id={postData[4].id} message={postData[4].message} number_like={postData[4].number_like} />
        </div>
    );
}

export default Posts_old;
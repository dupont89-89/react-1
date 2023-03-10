import React from 'react';
import s from './Posts.module.css';
import Posts_one from './Posts_one';

const Posts_old = () => {
    return (
        <div className={s.old__wall__posts}>
            <Posts_one number_like='200' message='Привет, Валентина. Как твои дела?' />
            <Posts_one number_like='120' message='Ирина. Как ты?' />
            <Posts_one number_like='60' message='Описание свойства box-shadow. Примеры тени для блока (внешняя, внутренняя, с одной стороны), эффекты для тени при наведении, анимация тени. ... 2.19. CSS3-тень блока. Опубликовано: 9 ноября 2016 Обновлено: 31 декабря 2019 6 комментариев.' />
            <Posts_one number_like='50' message='Вау, вау. ТЫ чего' />
            <Posts_one number_like='100' message='CSS-свойство box-shadow добавляет тень к элементу. Через запятую можно задать несколько теней. Тень описывается смещениями по оси X и Y относительно' />
        </div>
    );
}

export default Posts_old;
import React from 'react';
import s from './Avatar.module.css';
import Preloader from '../../common/Preloader/Preloader';

const Avatar = (props) => {

if (!props.photos) {
    return <Preloader />
}

    return (
        <div className={s.avatar}>
            <img src={props.photos.large} alt="" />
        </div>
    );
}

export default Avatar;
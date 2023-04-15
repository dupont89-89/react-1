import React from 'react';
import s from './Name.module.css';
import Preloader from '../../common/Preloader/Preloader';

const Name = (props) => {

    if (!props.fullName) {
        return <Preloader />
    }

    return (
        <div className={s.name__master}>
            <h2>{props.fullName}</h2>
        </div>
    );
}

export default Name;
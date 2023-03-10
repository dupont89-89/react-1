import React from 'react';
import Name from "../Name/Name";
import Description from "../Description/Description";
import s from './Info_master.module.css';

const Info_master = () => {
    return (
        <div className={s.master__name__description}>
            <Name />
            <Description />
        </div>
    );
}

export default Info_master;
import React from "react";
import preloader from '../../../assets/images/b49112a201d5f7bf04fcf051337f725f.gif';
import s from './preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.gif__preloader}><img alt="Загрузка" src={preloader}/></div>
    )
}

export default Preloader;
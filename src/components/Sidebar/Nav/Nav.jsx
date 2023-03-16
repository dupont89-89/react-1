import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

    return (
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? s.pending : isActive ? s.active : ""
            } to={props.id}>
                {props.name}
            </NavLink >
        </li>
        // <div className={s.nav__sidebar}>
        //             <li>
        //                 <NavLink className={({ isActive, isPending }) =>
        //                     isPending ? s.pending : isActive ? s.active : ""
        //                 } to="/">Главная
        //                 </NavLink >
        //             </li>
        //             <li>
        //                 <NavLink className={({ isActive, isPending }) =>
        //                     isPending ? s.pending : isActive ? s.active : ""
        //                 } to="profile">Профиль
        //                 </NavLink >
        //             </li>
        //             <li>
        //                 <NavLink className={({ isActive, isPending }) =>
        //                     isPending ? s.pending : isActive ? s.active : ""
        //                 } to="dialogs">Диалоги
        //                 </NavLink >
        //             </li>
        //             <li>
        //                 <NavLink className={({ isActive, isPending }) =>
        //                     isPending ? s.pending : isActive ? s.active : ""
        //                 } to="music">Моя музыка</NavLink >
        //             </li>
        //             <li><NavLink className={({ isActive, isPending }) =>
        //                 isPending ? s.pending : isActive ? s.active : ""
        //             } to="news">Новости
        //             </NavLink >
        //             </li>
        //             <li>
        //                 <NavLink className={({ isActive, isPending }) =>
        //                     isPending ? s.pending : isActive ? s.active : ""
        //                 } to="settings">Настройки
        //                 </NavLink >
        //             </li>
        // </div>
    );
}

export default Nav;
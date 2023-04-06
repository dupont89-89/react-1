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
    );
}

export default Nav;
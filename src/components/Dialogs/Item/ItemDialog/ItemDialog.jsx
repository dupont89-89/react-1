import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from './ItemDialog.module.css';

const ItemDialog = (props) => {
    return (
        <li>
           <div className={s.item__dialog}>
                <div className={s.item__dialog__avatar}>
                <div>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={s.group}>
                    <Link to="#2">
                        {props.group}
                    </Link>
                </div>
                </div>
                <div className={s.name}>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? s.pending : isActive ? s.active : ""
                    } to={"/dialogs/" + props.id}>
                        {props.name}
                    </NavLink>
                </div>
           </div>
           <hr />
        </li>
    );
}

export default ItemDialog;
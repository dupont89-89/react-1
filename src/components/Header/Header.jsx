import React from 'react';
import s from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo__block}>
                <Link to="/"><img className={s.logo} src="https://pluspng.com/img-png/fanta-logo-png-fanta-logo-png-2000x1972.png" alt="" /></Link>
            </div>
            <div className={s.block__login}>
                {props.isAuth ? props.login : <NavLink to='/login'><FontAwesomeIcon icon={faRightToBracket} /> Войти</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;
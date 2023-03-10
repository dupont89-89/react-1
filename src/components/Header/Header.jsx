import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://pluspng.com/img-png/fanta-logo-png-fanta-logo-png-2000x1972.png" alt="" />
        </header>
    );
}

export default Header;
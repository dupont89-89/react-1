import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.menu}>
                <ul>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? s.pending : isActive ? s.active : ""
                        } to="/">Главная
                        </NavLink >
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? s.pending : isActive ? s.active : ""
                        } to="profile">Профиль
                        </NavLink >
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? s.pending : isActive ? s.active : ""
                        } to="dialogs">Диалоги
                        </NavLink >
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? s.pending : isActive ? s.active : ""
                        } to="music">Моя музыка</NavLink >
                    </li>
                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? s.pending : isActive ? s.active : ""
                    } to="news">Новости
                    </NavLink >
                    </li>
                    <li>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? s.pending : isActive ? s.active : ""
                        } to="settings">Настройки
                        </NavLink >
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
import React from 'react';
import s from './Sidebar.module.css';
import Friends from './friends/Friends';
import Nav from './Nav/Nav';

const Sidebar = (props) => {

    let state = props.store

    let myFriends = state.myFriends
        .map(friends => <Friends id={friends.id} avatar__one__friends={friends.avatar__one__friends} name__one__friends={friends.name__one__friends} />);

    let navSidebar = state.navSidebar
        .map(nav => <Nav id={nav.id} name={nav.name} />);

    return (
        <aside className={s.sidebar}>
            <nav className={s.menu}>
                <ul>
                    {navSidebar}
                </ul>
            </nav>
            <hr />
            <div className={s.list__friends}>
                {myFriends}
            </div>
            <hr />
        </aside>
    );
}

export default Sidebar;
import React from 'react';
import s from './UsersContainer.module.css';
import UsersItem from './UsersItem';

const Users = (props) => {

    let usersMap = props.usersData
        .map(usersItem => <UsersItem id={usersItem.id} followed={usersItem.followed} key={usersItem.id} name={usersItem.name} surname={usersItem.surname} avatar={usersItem.avatar} country={usersItem.country} city={usersItem.city} status={usersItem.status} />);
    return (
        <div>
            <div className={s.users__header}>
                <div>
                    <h1>Пользователи</h1>
                </div>
                <div className={s.users__search}>
                    <input placeholder='Поиск пользователей' type="text" />
                </div>
            </div>
            {usersMap}
        </div>
    )
}

export default Users;
import React from 'react';
import s from './Item.module.css';
import ItemDialog from './ItemDialog/ItemDialog';

const Item = () => {

    let dialogsData = [
        { id: 3, name: 'Валентин', avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', group: 'Друзья' },
        { id: 4, name: 'Петя', avatar: 'https://w7.pngwing.com/pngs/805/207/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Подписчики' },
        { id: 5, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/450/288/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Слушатель' },
        { id: 6, name: 'Надя', avatar: 'https://w7.pngwing.com/pngs/306/225/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Партнеры' },
        { id: 7, name: 'Кроха', avatar: 'http://img2.3png.com/5ede474221aa06595201d090f7f7936d1ae2.png', group: 'Коллеги' },
        { id: 8, name: 'Лука', avatar: 'https://w7.pngwing.com/pngs/44/624/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png', group: 'Теневая' },
        { id: 9, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/638/710/png-transparent-avatar-female-girl-woman-avatars-xmas-giveaway-icon.png', group: 'Друзья' }
    ]

    return (
        <div className={s.dialogs__item}>
            <ul>
                <ItemDialog avatar={dialogsData [0] .avatar} id={dialogsData [0] .id} name={dialogsData [0] .name} group={dialogsData [0] .group} />
                <ItemDialog avatar={dialogsData [1] .avatar} id={dialogsData [1] .id} name={dialogsData [1] .name} group={dialogsData [1] .group} />
                <ItemDialog avatar={dialogsData [2] .avatar} id={dialogsData [2] .id} name={dialogsData [2] .name} group={dialogsData [2] .group} />
                <ItemDialog avatar={dialogsData [3] .avatar} id={dialogsData [3] .id} name={dialogsData [3] .name} group={dialogsData [3] .group}/>
                <ItemDialog avatar={dialogsData [4] .avatar} id={dialogsData [4] .id} name={dialogsData [4] .name} group={dialogsData [4] .group} />
                <ItemDialog avatar={dialogsData [5] .avatar} id={dialogsData [5] .id} name={dialogsData [5] .name} group={dialogsData [5] .group} />
                <ItemDialog avatar={dialogsData [6] .avatar} id={dialogsData [6] .id} name={dialogsData [6] .name} group={dialogsData [6] .group} />
            </ul>
        </div>
    );
}

export default Item;
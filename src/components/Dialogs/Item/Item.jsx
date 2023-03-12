import React from 'react';
import s from './Item.module.css';
import ItemDialog from './ItemDialog/ItemDialog';

const Item = (props) => {

    // let dialogsData = [
    //     { id: 3, name: 'Валентин', avatar: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', group: 'Друзья' },
    //     { id: 4, name: 'Петя', avatar: 'https://w7.pngwing.com/pngs/805/207/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Подписчики' },
    //     { id: 5, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/450/288/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Слушатель' },
    //     { id: 6, name: 'Надя', avatar: 'https://w7.pngwing.com/pngs/306/225/png-transparent-account-avatar-profile-user-avatars-icon.png', group: 'Партнеры' },
    //     { id: 7, name: 'Кроха', avatar: 'http://img2.3png.com/5ede474221aa06595201d090f7f7936d1ae2.png', group: 'Коллеги' },
    //     { id: 8, name: 'Лука', avatar: 'https://w7.pngwing.com/pngs/44/624/png-transparent-avatar-people-person-business-user-man-character-set-icon-portrait.png', group: 'Теневая' },
    //     { id: 9, name: 'Костя', avatar: 'https://w7.pngwing.com/pngs/638/710/png-transparent-avatar-female-girl-woman-avatars-xmas-giveaway-icon.png', group: 'Друзья' }
    // ]

    let dialogsElement = props.dialogsData
        .map(dialog => <ItemDialog avatar={dialog.avatar} id={dialog.id} name={dialog.name} group={dialog.group} />);

    return (
        <div className={s.dialogs__item}>
            <ul>
                {dialogsElement}
            </ul>
        </div>
    );
}

export default Item;
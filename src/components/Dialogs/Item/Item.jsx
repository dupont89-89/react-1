import React from 'react';
import s from './Item.module.css';
import ItemDialog from './ItemDialog/ItemDialog';

const Item = (props) => {

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
import React, { useEffect, useState } from 'react';
import s from './Profile.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect ( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div className={s.status__profile}>
                    <span onDoubleClick={activateEditMode}>
                        Мой статус: {props.status || '------'}
                    </span>
                </div>
            }
            {editMode &&
                <div className={s.status__profile}>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
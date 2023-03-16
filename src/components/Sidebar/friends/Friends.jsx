import React from 'react';
import s from './Friends.module.css';
import { Link } from 'react-router-dom';

const Friends = (props) => {

    return (
        <div className={s.friends__one}>
          <Link to={ "friends/" + props.id}>
                <div className={s.friends__one__name}>
                    <p>{props.name__one__friends}</p>
                </div>
                <div className={s.friends__avatar}>
                    <img src={props.avatar__one__friends} alt={props.name__one__friends} />
                </div>
          </Link>
        </div>
    );
}

export default Friends;
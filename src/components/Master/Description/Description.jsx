import React from 'react';
import s from './Description.module.css';
import Preloader from '../../common/Preloader/Preloader';

const Description = (props) => {

    if (!props.aboutMe) {
        return <Preloader />
    }

    if (!props.lookingForAJobDescription) {
        return <Preloader />
    }
    if (!props.contacts) {
        return <Preloader />
    }


    return (
        <div className={s.description__master}>
            <p>{props.aboutMe}</p>
            <p>{props.lookingForAJobDescription}</p>
            <div className={s.social__contact}>
                <ul>
                    <li>{props.contacts.facebook}</li>
                    <li>{props.contacts.website}</li>
                    <li>{props.contacts.vk}</li>
                    <li>{props.contacts.twitter}</li>
                    <li>{props.contacts.instagram}</li>
                    <li>{props.contacts.youtube}</li>
                    <li>{props.contacts.github}</li>
                    <li>{props.contacts.mainLink}</li>
                </ul>
            </div>
        </div>
    );
}

export default Description;
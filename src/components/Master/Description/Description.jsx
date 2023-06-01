import React from 'react';
import s from './Description.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { Link } from 'react-router-dom';

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
                    <li><Link to={props.contacts.facebook}>{props.contacts.facebook}</Link></li>
                    <li><Link to={props.contacts.website}>{props.contacts.website}</Link></li>
                    <li><Link relative="path" to={props.contacts.vk}>{props.contacts.vk}</Link></li>
                    <li><Link to={props.contacts.twitter}>{props.contacts.twitter}</Link></li>
                    <li><Link to={props.contacts.instagram}>{props.contacts.instagram}</Link></li>
                    <li><Link to={props.contacts.youtube}>{props.contacts.youtube}</Link></li>
                    <li><Link to={props.contacts.github}>{props.contacts.github}</Link></li>
                    <li><Link to={props.contacts.mainLink}>{props.contacts.mainLink}</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Description;
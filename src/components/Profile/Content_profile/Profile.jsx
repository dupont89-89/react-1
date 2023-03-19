import React from 'react';
import Avatar from "../../Master/Avatar/Avatar";
import Baner from "../../Baner/Baner";
import Info_master from "../../Master/Info_master/Info_master";
import Price from "../../Master/Price/Price";
import Services from "../../Master/Services/Services";
import Posts from "../Posts/Posts";
import s from './Profile.module.css';
import Signup from '../../Master/Signup/Signup';

const Profile = (props) => {

    return (
        <div>
            <div className={s.baner__master}>
                <Baner />
            </div>
            <div className={s.blok__profil__content}>
                <div className={s.info__master}>
                    <div className={s.info__master__description__avatar}>
                        <Avatar />
                        <Info_master />
                    </div>
                </div>
                <div className={s.block_profil}>
                    <div className={s.block__master__left}>
                        <Price />
                        <Services />
                        <Signup />
                    </div>
                    <div className={s.posts__wall}>
                        <Posts dispatch={props.dispatch} newPosttext={props.state.newPosttext} postData={props.state.postData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
import React from 'react';
import Name from "../Name/Name";
import Description from "../Description/Description";
import s from './Info_master.module.css';
import ProfileStatus from '../../Profile/Content_profile/ProfileStatus';

const InfoMaster = (props) => {
    return (
        <div className={s.master__name__description}>
            <Name fullName={props.fullName} />
            <ProfileStatus userId={props.userId} updateStatus={props.updateStatus} status={props.status} />
            <Description lookingForAJobDescription={props.lookingForAJobDescription} aboutMe={props.aboutMe} contacts={props.contacts} />
        </div>
    );
}

export default InfoMaster;
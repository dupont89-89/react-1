import React from 'react';
import Name from "../Name/Name";
import Description from "../Description/Description";
import s from './Info_master.module.css';

const InfoMaster = (props) => {
    return (
        <div className={s.master__name__description}>
            <Name fullName={props.fullName} />
            <Description lookingForAJobDescription={props.lookingForAJobDescription} aboutMe={props.aboutMe} contacts={props.contacts} />
        </div>
    );
}

export default InfoMaster;
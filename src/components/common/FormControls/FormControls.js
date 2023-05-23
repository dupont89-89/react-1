import React from 'react';
import s from '../FormControls/FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error
    return (
<div className={s.form__control + " " + (showError ? s.error : " ")}>
    {showError && <span>{meta.error}</span>}
<textarea {...input} {...props} />
</div>
    )
}
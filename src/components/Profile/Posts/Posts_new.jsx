import React from 'react';
import s from './Posts.module.css';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addPosts} from '../../../redux/profile-reducer';
import { maxLenghtCreater, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const PostsNewForm = (props) => {

    return (
        <div className={s.new__posts}>
            <form onSubmit={props.handleSubmit}>
                <Field name="newposts"
                    component={Textarea}
                    type={"text"}
                    placeholder='Напиши уже новый пост'
                    validate={[requiredField, maxLenghtCreater(10)]}
                    className={s.text__new__posts} />
                <input className={s.btn__send__posts} type="submit" />
            </form>
        </div>
    );
}

const NewPostsReduxForm = reduxForm({
    form: 'newposts'
})(PostsNewForm)

const PostsNew = (props) => {

    const onSubmit = (values) => {
        return props.addPostsAction(values.newposts)
    }

    return (
        <div>
            <NewPostsReduxForm onSubmit={onSubmit} />
        </div>
    );
}

let mapDispatchToProps = (dispatch) => {
   return {
    addPostsAction: (values) => {
        dispatch(addPosts(values))}
}}

connect(mapDispatchToProps)(PostsNew);

export default PostsNew;

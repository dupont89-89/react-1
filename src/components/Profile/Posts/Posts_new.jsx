import React from 'react';
import s from './Posts.module.css';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addPosts} from '../../../redux/profile-reducer';

const PostsNewForm = (props) => {

    return (
        <div className={s.new__posts}>
            <form onSubmit={props.handleSubmit}>
                <Field name="newposts"
                    component="textarea"
                    type={"text"}
                    placeholder='Напиши уже новый пост'
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

import React from 'react';
import { addPosts } from '../../../redux/profile-reducer';
import { updateNewPostText } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPosttext: state.profilePage.newPosttext
    }
}

const PostsNewContainer = connect(mapStateToProps, {addPosts, updateNewPostText})(PostsNew);

export default PostsNewContainer;

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPosts: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action);
//         }
//     }
// }
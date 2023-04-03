import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';
import StoreContext from '../../../redux/store-context';

const PostsNewContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let addPosts = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <PostsNew newPosttext={store.getState().profilePage.newPosttext} addPosts={addPosts} updateNewPostText={onPostChange} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default PostsNewContainer;
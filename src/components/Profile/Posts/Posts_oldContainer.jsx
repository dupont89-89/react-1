import React from 'react';
import PostsOld from './Posts_old';
import StoreContext from '../../../redux/store-context';

const PostsOldContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store =>
        <PostsOld state={store.getState().profilePage.postData} />
            }
        </StoreContext.Consumer>
    );
}

export default PostsOldContainer;
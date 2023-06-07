import PostsOld from './Posts_old';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.profilePage.postData
    }
}

const PostsOldContainer = connect (mapStateToProps) (PostsOld);

export default PostsOldContainer;
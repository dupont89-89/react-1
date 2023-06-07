import { addPosts } from '../../../redux/profile-reducer';
import PostsNew from './Posts_new';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPosttext: state.profilePage.newPosttext
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
     addPostsAction: (values) => {
         dispatch(addPosts(values))}
 }}

const PostsNewContainer = connect(mapStateToProps, mapDispatchToProps )(PostsNew);

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
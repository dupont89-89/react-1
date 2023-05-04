import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import WithAuthRedirect from '../../../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        // isAuth: state.auth.isAuth
    }
}
// let authRedirectComponent = (props) => {
//   if (!props.isAuth) return <Navigate to="/login" />
//   return <Messages {...props} />
// }

// compose(
//     connect(mapStateToProps),
//     WithAuthRedirect
// ) (Messages)

// let authRedirectComponent = WithAuthRedirect(Messages)

// const MessagesContainer = connect(mapStateToProps)(authRedirectComponent);

export default compose(
    connect(mapStateToProps),
    WithAuthRedirect
) (Messages);
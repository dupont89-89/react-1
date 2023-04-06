import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';

// const UsersContainer = () => {
//     // return (
//     //     <Users />
//     // );
//     // }

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setUsers: (usersData) => {
            dispatch(setUsersActionCreator(usersData))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer
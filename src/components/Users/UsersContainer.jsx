import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    // componentDidMount() {
    //     onPageChange = (p) => {
    //         this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, p); 
    //     };
    // }
    onPageChange = (p) => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, p);

    }
    
    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= 20; i++) {
            pages.push(i);
        }
       
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users 
                unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator} 
                followUsersThunkCreator={this.props.followUsersThunkCreator} 
                followingInProgress={this.props.followingInProgress} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange} 
                usersData={this.props.usersData} 
                pages={pages} 
                />
            </div>
        ) 
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

export default connect(mapStateToProps, { getUsersThunkCreator, followUsersThunkCreator, unfollowUsersThunkCreator })(UsersContainer);
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotal, tooggleIsFetching } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.tooggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.tooggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotal(response.data.totalCount);
        });
    }

    onPageChange = (p) => {
        this.props.tooggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.tooggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });

    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }

        return (
            <div>
             {this.props.isFetching ? <Preloader /> : null}
                <Users  currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow} onPageChange={this.onPageChange} usersData={this.props.usersData} pages={pages} />
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
        isFetching: state.usersPage.isFetching
        
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersTotal, tooggleIsFetching})(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowActionCreator(userId))
//         },
//         setUsers: (usersData) => {
//             dispatch(setUsersActionCreator(usersData))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageActionCreator(page))
//         },
//         setUsersTotal: (userTotal) => {
//             dispatch(setUserTotalActionCreator(userTotal))
//         }
//         ,
//         tooggleIsFetching: (toogle) => {
//             dispatch(isFetchingUserYesActionCreator(toogle))
//         }
//     }
// }
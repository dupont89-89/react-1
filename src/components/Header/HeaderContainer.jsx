import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { authUsersThunkCreator } from '../../redux/auth-reducer';
import {authUser} from '../../api/api';


class HeaderContainer extends React.Component {
  componentDidMount() {
  this.props.authUsersThunkCreator();
 
    // authUser().then(response => {
    //     if (response.data.resultCode === 0) {
    //       this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email);
    //     }

    //   });
  }
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.data.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { authUsersThunkCreator })(HeaderContainer);

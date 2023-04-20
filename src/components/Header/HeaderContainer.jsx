import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email);
        }

      });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);

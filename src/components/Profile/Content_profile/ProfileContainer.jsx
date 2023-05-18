import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { dataProfileThunkCreator, updateStatus, getStatus } from '../../../redux/profile-reducer'
import WithAuthRedirect from '../../../hoc/WithAuthRedirect';
import { useParams } from 'react-router-dom';

export function withRouter(ProfileContainer) {
  return (props) => {
    const match = { params: useParams() };
    return <ProfileContainer {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.dataProfileThunkCreator(userId);
    this.props.getStatus(userId);
  
  }
  render() {
    return (
      <div>
        <Profile updateStatus={this.props.updateStatus} status={this.props.status} aboutMe={this.props.aboutMe} contacts={this.props.contacts}
          fullName={this.props.fullName} lookingForAJob={this.props.lookingForAJob} lookingForAJobDescription={this.props.lookingForAJobDescription}
          photos={this.props.photos} userId={this.props.userId} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {

  return {
    aboutMe: state.profilePage.usersDataProfile.aboutMe,
    contacts: state.profilePage.usersDataProfile.contacts,
    fullName: state.profilePage.usersDataProfile.fullName,
    lookingForAJob: state.profilePage.usersDataProfile.lookingForAJob,
    lookingForAJobDescription: state.profilePage.usersDataProfile.lookingForAJobDescription,
    photos: state.profilePage.usersDataProfile.photos,
    userId: state.profilePage.usersDataProfile.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}
// let authRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Navigate to="/login" />
//   return <ProfileContainer {...props} />
// }

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
let WithUrlDataContainerComponentRa = WithAuthRedirect(WithUrlDataContainerComponent);

export default connect(mapStateToProps, { dataProfileThunkCreator, getStatus, updateStatus})(WithUrlDataContainerComponentRa);
import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/profile-reducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // this.props.tooggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
            
        });
    }

  render() {
    return (
      <div>
        <Profile aboutMe={this.props.aboutMe} contacts={this.props.contacts} 
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
    }
}

export default connect(mapStateToProps, {setUsersProfile} ) (ProfileContainer);
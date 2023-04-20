import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

export function withRouter(ProfileContainer){
  return(props)=>{

     const match  = {params: useParams()};
     return <ProfileContainer {...props}  match = {match}/>
 }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
        userId = 2;
      }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile} ) (WithUrlDataContainerComponent);
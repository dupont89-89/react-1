import { createSelector } from "reselect";

export const getProfile = (state) => {
    return state.profilePage.usersDataProfile.aboutMe;
}

export const getProfileAboutMeSelector= (state) => {
    getProfile(state);
} 


export const getProfileAboutMeSuper = createSelector( getProfile, (aboutMe) => {
    return aboutMe;
} )

export const getProfileAboutMe = (state) => {
    return state.profilePage.usersDataProfile.aboutMe;
}

export const getProfleContacts = (state) => {
    return state.profilePage.usersDataProfile.contacts;
}

export const getProfleFullName = (state) => {
    return state.profilePage.usersDataProfile.fullName;
}

export const getProfleLookingForAJob = (state) => {
    return state.profilePage.usersDataProfile.lookingForAJob;
}

export const getProfleLookingForAJobDescription = (state) => {
    return state.profilePage.usersDataProfile.lookingForAJobDescription;
}

export const getProflePhotos = (state) => {
    return state.profilePage.usersDataProfile.photos;
}

export const getProfleUserId = (state) => {
    return state.profilePage.usersDataProfile.userId;
}

export const getProfleIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getProfleStatus = (state) => {
    return state.profilePage.status;
}
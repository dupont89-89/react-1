import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import DialogsContainer from './components/Dialogs/Dialogs_Container/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/Content_profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Auth/Auth'
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


// const App = (props) => {

//   return (
//     <div className='wrapper'>
//       <HeaderContainer />
//       <SidebarContainer />
//       <div className='wrapper__content'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile/*" element={<ProfileContainer />}>
//             <Route path=":userId?" element={<ProfileContainer />} />
//           </Route>
//           <Route path="dialogs/*" element={<DialogsContainer />} />
//           <Route path="music" element={<Music />} />
//           <Route path="news" element={<News />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="users" element={<UsersContainer />} />
//           <Route path="login" element={<Login />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    this.props.initializedApp();
    }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='wrapper'>
      <HeaderContainer />
      <SidebarContainer />
      <div className='wrapper__content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<ProfileContainer />}>
            <Route path=":userId?" element={<ProfileContainer />} />
          </Route>
          <Route path="dialogs/*" element={<DialogsContainer />} />
          <Route path="music" element={<Music />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect( mapStateToProps , { initializedApp })(App);

// export default App;

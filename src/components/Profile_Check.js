import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';

class Profile_Check extends React.Component {

  constructor() {
    super()

    let user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }


  }

  render() {
    return (
        <Profile data={this.state.user}/>
    )
  }
}

export default Profile_Check;

import React from 'react';
import {View, Text} from 'react-native';
import Profile from './Profile1';
import MoreProfileInfo from './MoreProfileInfo';
import ProfilePage from './ProfilePage';
class ProfilePageContainers extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }
  displayChange = () => {
    this.setState(prevState => {
      return {
        display: !prevState.display,
      };
    });
  };
  render() {
    const {display} = this.state;
    return (
      <View>
        {display ? (
          <ProfilePage onpress={this.displayChange} />
        ) : (
          <MoreProfileInfo onpress={this.displayChange} />
        )}
      </View>
    );
  }
}

export default ProfilePageContainers;

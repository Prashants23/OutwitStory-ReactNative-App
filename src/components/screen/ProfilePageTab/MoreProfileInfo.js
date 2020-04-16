import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Stack, Router, Scene} from 'react-native-router-flux';
import Profile from './Profile1';
import Navigation from '../../../navigation';
import Home from '../HomeTab/StoryOfTheDayTab/Home1';
import Addnewstory from '../AddNewStoryTab/Addnewstory';

const styles = StyleSheet.create({
  NameContainer: {
    justifyContent: 'center',
    top: 40,
    left: 0,
    right: 0,
    bottom: 20,

    alignItems: 'center',
  },
  NameText: {
    fontSize: 15,
    color: 'black',
    letterSpacing: 4,
  },
  titleText: {
    fontSize: 12,
    color: 'gray',
    letterSpacing: 3,
  },
  innerTabContainerHome: {
    backgroundColor: 'black',
    height: 90,
    // flex:1
    // top: 0,
  },
});
class MoreProfileInfo extends React.Component {
  render() {
    const {onpress} = this.props;
    return (
        <View style={styles.NameContainer}>
        <Text style={styles.NameText}>Prashant Kumar Shukla</Text>
        <Text style={styles.titleText}>Author</Text>
        <Text onPress={onpress}>Profile Page</Text>
      </View>
    );
  }
}
export default MoreProfileInfo;

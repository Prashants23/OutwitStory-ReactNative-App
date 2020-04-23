import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MoreProfileInfo from './MoreProfileInfo';
import CustomIcon from '../../atoms/CustomIcon';
import {
  Height,
  Width,
  verticalScale,
  HorizontalScale,
  horizontalScale,
} from '../../../utils/stylesheetawesomeproject';
import Buttons from '../../atoms/buttons';
import { Actions } from 'react-native-router-flux';

// const background = StyleSheet.create({});

const ProfileInfoContainer = StyleSheet.create({
  ProfileInfoContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(Height * 0.05),
    width: Width,
    height: Height,
    // backgroundColor: '#000a12',
    // backgroundColor:'white'
  },
});

const ProfileImageContainer = StyleSheet.create({
  ImageContainer: {
    width: Width * 0.7,
    height: Height * 0.35,
    // borderWidth: 2,
    borderColor: '#946715',
    // backgroundColor: 'white',
    elevation: 15,
    borderRadius: 15,
  },
  ProfilePhoto: {
    width: Width * 0.7,
    height: Height * 0.35,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

const ProfileNameContainer = StyleSheet.create({
  NameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  Name: {
    color: 'black',
    // color:'white',
    fontSize: 20,
    letterSpacing: 1,
  },
  Title: {
    color: 'gray',
    fontSize: 15,
    letterSpacing: 1,
  },
});

const followersStoriesCountContainer = StyleSheet.create({
  Container: {
    width: Width * 0.59,
    height: Height * 0.098,
  },
  LinearGradientBackground: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 8,
    flexDirection: 'row',
  },
  partitions: {
    width: (Width * 0.59) / 3,
  },
  Number: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    // alignItems:'center'
  },
  Text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  //   Stories
});

const followButtonContainer = StyleSheet.create({
  followButton: {
    width: Width * 0.45,
    height: Height * 0.07,
    // backgroundColor:'blue',
    // borderBottomRightRadius:12,
    // borderBottomLeftRadius:12
  },
  LinearGradientBackgroundButton: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 8,
    // width: Width * 0.45,
    // height: Height * 0.25,
  },
  buttonstyle: {
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 25,
    // fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    letterSpacing: 0.8,
    // paddingLeft: 30,
  },
});

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      ifmoreDetails: false,
    };
  }

  moreDetails = () => {
    this.setState({ifmoreDetails: !this.state.ifmoreDetails});
  };

  renderProfileInfo() {
    return (
      <View style={[ProfileInfoContainer.ProfileInfoContainer]}>
        {/* name and Title Container starts here */}
        <View style={[ProfileNameContainer.NameContainer]}>
          <Text style={[ProfileNameContainer.Name]}>Prashant Kumar Shukla</Text>
          <Text style={[ProfileNameContainer.Title]}>author</Text>
        </View>
        {/* name and Title Container starts here */}

        {/* Image Container srtarts here */}
        <View style={[ProfileImageContainer.ImageContainer]}>
          <ImageBackground
            source={require('../../../assets/pks.jpg')}
            style={ProfileImageContainer.ProfilePhoto}
          />
        </View>
        {/* Image Container srtarts here */}

        {/* FollowersInfo No of stories starts here */}
        <View style={[followersStoriesCountContainer.Container]}>
          <LinearGradient
            startPoint={{x: 0.0, y: 0.2}}
            endPoint={{x: 0.5, y: 0}}
            locations={[0, 0.7]}
            colors={['gray', 'white']}
            style={[followersStoriesCountContainer.LinearGradientBackground]}>
            <View
              style={{
                marginTop: 18,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={[followersStoriesCountContainer.partitions]}>
                <Text style={[followersStoriesCountContainer.Number]}>34</Text>
                <Text
                  style={
                    [followersStoriesCountContainer.Text]
                    // {marginTop: 10, fontSize: 14, color: 'gray'},
                  }>
                  stories
                </Text>
              </View>
              <View style={[followersStoriesCountContainer.partitions]}>
                <Text style={followersStoriesCountContainer.Number}>400</Text>
                <Text style={[[followersStoriesCountContainer.Text]]}>
                  followers
                </Text>
              </View>
              <View style={[followersStoriesCountContainer.partitions]}>
                <Text style={[followersStoriesCountContainer.Number]}>40</Text>
                <Text style={[[followersStoriesCountContainer.Text]]}>
                  following
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        {/* follow button starts here */}
        <View style={[followButtonContainer.followButton]}>
          <LinearGradient
            startPoint={{x: 0.0, y: 0.2}}
            endPoint={{x: 0.5, y: 0}}
            locations={[0, 0.7]}
            colors={['gray', '#a2cede']}
            style={followButtonContainer.LinearGradientBackgroundButton}>
            <Buttons
              styleme={followButtonContainer.buttonstyle}
              textstyle={followButtonContainer.textstyle}
              title={'Edit Profile'}
              onpress={this.moreDetails}
            />
            <View>
              <Text>
                contents of prashant shukla has been read by 2000 people
              </Text>
            </View>
            {/* <Buttons
              onpress={() => console.log('clicked')}
              title={'More Details'}
              styleme={{marginTop: 20, backgroundColor: 'white', height: 50}}
            /> */}
          </LinearGradient>
        </View>
      </View>
    );
  }

  renderModals() {
    return (
      <View>
        <Modal
          animationType="slide"
          onRequestClose={this.moreDetails}
          transparent={false}
          visible={this.state.ifmoreDetails}>
          <MoreProfileInfo onpress={this.moreDetails} />
        </Modal>
      </View>
    );
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../../assets/back34.jpg')}
          style={{width: Width, height: Height}}
          blurRadius={3}>
          <LinearGradient
            startPoint={{x: 0.0, y: 0.25}}
            endPoint={{x: 0.5, y: 1.0}}
            locations={[0.2, 0.6]}
            colors={['#f2f9ff', '#5497d1']}
            // colors={['#f2f9ff', '#000a12']}
            style={{width: '100%', height: '100%'}}>
            <CustomIcon
              name="back-2"
              color="black"
              size={20}
              style={{marginTop: 20, marginLeft: 10}}
              onPress={()=>Actions.Timeline()}
            />
            {this.renderProfileInfo()}
            {this.renderModals()}
            {/* </View> */}
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
export default ProfilePage;

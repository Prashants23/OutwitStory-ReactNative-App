import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ReactPropTypes,
  Modal,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  Height,
  Width,
} from '../../../utils/stylesheetawesomeproject';
import LinearGradient from 'react-native-linear-gradient';
import MoreProfileInfo from './MoreProfileInfo';
import CustomIcon from '../../atoms/CustomIcon';

const styles = StyleSheet.create({
  profilePhotoContainer: {
    borderColor: '#946715',
    height: Height * 0.3786,
    width: Width * 0.45,
    alignItems: 'center',
    shadowColor: '#5497d1',
    elevation: 25,
    shadowOffset: {
      height: 15,
      width: 15,
    },
    shadowOpacity: 5,
    shadowRadius: 25,
    borderRadius: 8,
  },
  ProfilePhoto: {
    height: verticalScale(257),
    width: horizontalScale(257),
    borderRadius: 8,
    overflow: 'hidden',
  },
  // AuthorNameContainer: {
  //   width: Width*0.8,
  //   height: 60,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginLeft: 10,
  // },
  NameContainer: {
    // position: 'absolute',
    // height: verticalScale(80),
    // width: horizontalScale(180),
    justifyContent: 'center',
    // top: 190,
    left: 0,
    right: 0,
    bottom: 20,

    alignItems: 'center',
  },
  NameText: {
    fontSize: 18,
    // color: '#946715',
    color: 'white',
    letterSpacing: 4,
  },
  titleText: {
    fontSize: 14,
    color: 'gray',
    letterSpacing: 4,
  },
  AuthorAbout1: {
    height: 80,
    width: 280,
    marginLeft:30,
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: 'black',
    elevation: 15,
    shadowOffset: {
      height: 15,
      width: 15,
    },
  },
  AuthorAbout2: {
    height: Height * 0.11,
    width: Width * 0.60,
    flexDirection: 'row',
  },
  AuthorAboutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  AboutContent: {
    marginTop: 20,
    width: 87,
  },
  AboutContentText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  followContainer: {
    alignItems: 'center',
  },
  followButton1: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 15,
  },
  followButton2: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      ifmoreDetails: false,
      moreDetailsUserId: '',
    };
  }

  moreDetails = e => {
    this.setState({
      ifmoreDetails: !this.state.ifmoreDetails,
      moreDetailsUserId: e,
    });
  };
  render() {
    const {onpress} = this.props;
    const {ifmoreDetails, moreDetailsUserId} = this.state;
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        {/* <LinearGradient
          startPoint={{x: 0.0, y: 0.25}}
          endPoint={{x: 0.5, y: 1.0}}
          locations={[0.2, 0.6]}
          // colors={['#aab3e6','#5497d1']}
          colors={['#f2f9ff', '#5497d1']}
          // colors={['#005aa7', '#195A79']}
          // colors={['#8ca2ba', '#65778a']}
          // colors={['white', '#65778a']}
          style={{width: '100%', height: '100%'}}> */}
        <ImageBackground
          source={require('../../../assets/back34.jpg')}
          style={{width: '100%', height: '100%'}}
          blurRadius={2}>
            {/* Profile Image starts here */}
          <View
            style={{
              alignItems: 'center',
              // justifyContent: 'flex-end',
              width: Width * 1,
              height: Height * 0.54,
            }}>
            <View style={styles.NameContainer}>
              <Text style={styles.NameText}>Prashant Kumar Shukla</Text>
              <Text style={styles.titleText}>Author</Text>
            </View>
            <View style={styles.profilePhotoContainer}>
              <ImageBackground
                style={styles.ProfilePhoto}
                source={require('../../../assets/pks.jpg')}
              />
            </View>
          </View>
          {/* Profile Image Ends here */}
          {/* Count Stories, Followers, Following container starts here */}
          <View style={styles.AuthorAboutContainer}>
            <View style={styles.AuthorAbout1}>
              <LinearGradient
                startPoint={{x: 0.0, y: 0.2}}
                endPoint={{x: 0.5, y: 0}}
                locations={[0, 0.7]}
                // colors={['#aab3e6','#005aa7']}
                // colors={['#005aa7', '#195A79']}
                colors={['gray', 'white']}
                style={{
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  // width: Width * 0.64,
                  width:Width*.60,
                  height: Height * 0.098,
                }}>
                <View style={styles.AuthorAbout2}>
                  <View style={styles.AboutContent}>
                    <Text style={styles.AboutContentText}>34</Text>
                    <Text
                      style={[
                        styles.AboutContentText,
                        {marginTop: 10, fontSize: 14, color: 'gray'},
                      ]}>
                      Stories
                    </Text>
                  </View>
                  <View style={styles.AboutContent}>
                    <Text style={styles.AboutContentText}>400</Text>
                    <Text
                      style={[
                        styles.AboutContentText,
                        {marginTop: 10, fontSize: 14, color: 'gray'},
                      ]}>
                      Followers
                    </Text>
                  </View>
                  <View style={styles.AboutContent}>
                    <Text style={styles.AboutContentText}>40</Text>
                    <Text
                      style={[
                        styles.AboutContentText,
                        {marginTop: 10, fontSize: 14, color: 'gray'},
                      ]}>
                      Following
                    </Text>
                  </View>
                </View>
                {/* </View> */}
              </LinearGradient>
            </View>
          </View>
           {/* Count Stories, Followers, Following container starts here */}

           {/* Follow button tarts here */}

          <View style={styles.followContainer}>
            <View style={styles.followButton1}>
              <LinearGradient
                startPoint={{x: 0.0, y: 0.2}}
                endPoint={{x: 0.5, y: 0}}
                locations={[0, 0.7]}
                colors={['#2e2c2d', '#005aa7']}
                // colors={['#005aa7', '#195A79']}
                // colors={['gray', 'white']}
                style={{
                  width: '100%',
                  height: '100%',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}>
                <View style={styles.followButton2}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: 'white',
                      fontWeight: '700',
                    }}>
                    Follow
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          {/* </View> */}

          {/* More Info Starts here */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // marginRight: 20,
              marginHorizontal: Width * 0.008,
              marginTop: Height * 0.1,
            }}>
            {/* <Text style={{color: 'white', fontSize: 18}} onPress={onpress}>
              More
            </Text> */}
            <CustomIcon
              name={'next'}
              size={30}
              color="white"
              onPress={onpress}
            />
          </View>
          {/* More Info Ends Here */}
          {/* // </ImageBackground> */}
        </ImageBackground>
        {/* </LinearGradient> */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={ifmoreDetails}>
          <MoreProfileInfo />
        </Modal>
      </View>
    );
  }
}

export default Profile;

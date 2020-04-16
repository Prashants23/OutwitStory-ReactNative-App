import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Buttons from '../../atoms/buttons';
import ProfileDetails from '../../organism/Profiledetails';

const styles = StyleSheet.create({
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '45%',
    //   backgroundColor:"blue"
  },
  middle: {
    position: 'relative',
    marginTop: 200,
    // width:300,
    // height:250,
    backgroundColor: 'white',
    width: 350,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

    //////

    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    // borderTopColor:"black",
    elevation: 20,
  },
  profilephoto: {
    // position: 'absolute',
    //   left: 0,
    //   top: 0,
    width: 150,
    height: 150,
    backgroundColor: 'green',
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: 32,

    /////
    //   borderColor: "transparent", // Required to show shadows on Android for some reason !?!?
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    // borderTopColor:"black",
    elevation: 20,
  },
  profileimage: {
    width: 141,
    height: 141,
    borderRadius: 100,
  },
  namebio: {
    marginBottom: 45,
    height: 30,
  },
  profiledetails: {
    marginTop: 20,
    backgroundColor: 'white',
    width: 350,
    height: 400,
    borderRadius: 15,

    /////
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    // borderTopColor:"black",
    elevation: 20,
  },
  profileoptions: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 98,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderTopWidth: 1,
  },
  profileoptionstext: {
    color: 'blue',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
    fontSize: 17,
    height: '100%',
  },
  editbutton: {
    paddingLeft: 8,
    paddingTop: 2,
  },
});
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      iseditableinputemaildisplay: true,
      title: '',
      name: '',
      Email: '',
      aboutme: '',
    };
  }
  nameinputdisplay = () => {
    this.setState(prevState => {
      return {
        iseditableinputemaildisplay: !prevState.iseditableinputemaildisplay,
      };
    });
  };

  inputnamechange = e => {
    this.setState({name: e});
  };
  render() {
    const {iseditableinputemaildisplay, name, Email, aboutme} = this.state;
    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.behind}>
            <ImageBackground
              source={require('../../../assets/background.jpg')}
              style={{width: '100%', height: '100%', position: 'absolute'}}
              blurRadius={2}>
              <Text
                style={{
                  backgroundColor: 'black',
                  opacity: 0.7,
                  color: 'white',
                  width: '100%',
                  height: 50,
                  // textAlignVertical: 'center',
                  // position:'fixed',
                  paddingLeft: 20,
                }}>
                Profile
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 15,
                  color: 'white',
                  fontSize: 30,
                  fontWeight: '700',
                }}>
                Name will
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 5,
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                Author
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.middle}>
            <View style={styles.profilephoto}>
              <Image
                style={styles.profileimage}
                source={require('../../../assets/back1.jpg')}
              />
            </View>
            <View style={styles.namebio}>
              <Text
                numberOfLines={2}
                style={{fontSize: 16, textAlign: 'center'}}>
                Bio tis is bio bio bioo...
              </Text>
            </View>
            <View style={styles.profileoptions}>
              <Text
                style={[
                  styles.profileoptionstext,
                  {paddingRight: 15, paddingLeft: 15},
                ]}>
                My Stories
              </Text>
              <Text
                style={[
                  styles.profileoptionstext,
                  {paddingRight: 15, paddingLeft: 15},
                ]}>
                My Journal
              </Text>
              <Text
                style={[
                  styles.profileoptionstext,
                  {
                    borderRightColor: 'white',
                    paddingRight: 15,
                    paddingLeft: 15,
                  },
                ]}>
                Competition
              </Text>
            </View>
          </View>

          {/* <View style={styles.profiledetails}>
                        <Text style={{ paddingLeft: 10, marginTop: 10, fontSize: 20, borderBottomWidth: 1 }}>Profile Details</Text>
                        <Text>Name</Text>
                        <Text>Email</Text>
                        <Text>Age</Text>
                        <Text>Phone No</Text>
                    </View> */}

          <View style={styles.profiledetails}>
            <Text
              style={{
                paddingLeft: 10,
                marginTop: 10,
                fontSize: 20,
                borderBottomWidth: 1,
              }}>
              Other
            </Text>
            {/* <ProfileDetails
                            onchange={this.inputnamechange}
                             onpressvisible={this.inputdisplayfunction}
                              lablestate={this.state.name}
                              buttontitle={this.state.title}
                              displayinput={this.state.editableinputnamedisplay}
                            // onpresshide={this.inputdisplayhidefunction}
                            buttontextstyle={styles.editbutton}
                            lable={"Name"}
                                    /> */}
            <ProfileDetails
              onchange={this.inputnamechange}
              onpressvisible={this.nameinputdisplay}
              lablestate={name}
              buttontitle={iseditableinputemaildisplay ? 'Edit' : 'Save'}
              displayinput={iseditableinputemaildisplay}
              buttontextstyle={styles.editbutton}
              lable={'Email'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Profile;

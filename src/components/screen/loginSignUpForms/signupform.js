import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Linking,
  ImageBackground,
  Dimensions,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../organism/Logo';
import Buttons from '../../atoms/buttons';
import {Actions} from 'react-native-router-flux';
import {
  verticalScale,
  //   horizontalScale,
} from '../../../utils/stylesheetawesomeproject';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },

  button: {
    paddingLeft: 40,
    paddingRight: 100,
  },

  loginFormContainer: {
    alignItems: 'center',
  },
  textinput: {
    // backgroundColor: '#393b3a',
    color: 'white',
    width: 350,
    height: 50,
    paddingBottom: 12,
    paddingTop: 12,
    marginBottom: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingLeft: 15,
    fontSize: 15,
  },
  loginsignupbuttons: {
    textAlign: 'center',
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#946715',
    // marginRight: horizontalScale(5),
    marginTop: verticalScale(10),
  },

  TextStyle: {
    color: '#a9d1c3',
    fontSize: 14,
    fontWeight: '700',
    // marginTop: verticalScale(7),
    textAlign: 'center',
  },
  logo: {
    fontSize: 35,
    fontWeight: '700',
    color: '#946715',
    textAlign: 'center',
    marginTop: verticalScale(80),
  },
});

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordvisibility: true,
      Email: '',
      UserName: '',
      Password: '',
      RepeatPassword: '',
      ifEmailEmpty: false,
      ifUsernameEmpty: false,
      ifPasswordEmpty: false,
      ifRepeatPasswordEmpty: false,
    };
  }
  _scrollToInput = (reactNode: any) => {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode);
  };

  EmailUpdate = event => {
    this.setState({Email: event});
  };
  UserNameUpdate = event => {
    this.setState({UserName: event});
  };
  PasswordUpdate = event => {
    this.setState({Password: event});
  };
  RepeatPasswordUpdate = event => {
    this.setState({RepeatPassword: event});
  };
  onSignUp = () => {
    const {UserName, Email, Password, RepeatPassword} = this.state;
    if (UserName === '') {
      this.setState({ifUsernameEmpty: true});
    } else {
      this.setState({ifUsernameEmpty: false});
    }
    if (Email === '') {
      this.setState({ifEmailEmpty: true});
    } else {
      this.setState({ifEmailEmpty: false});
    }
    if (Password === '') {
      this.setState({ifPasswordEmpty: true});
    } else {
      this.setState({ifPasswordEmpty: false});
    }
    if (RepeatPassword === '') {
      this.setState({ifRepeatPasswordEmpty: true});
    } else {
      this.setState({ifRepeatPasswordEmpty: false});
    }
  };

  renderInputView() {
    const {
      ifUsernameEmpty,
      ifEmailEmpty,
      ifPasswordEmpty,
      ifRepeatPasswordEmpty,
    } = this.state;

    const UserNamePlaceholder = ifUsernameEmpty
      ? 'Please Enter User Name'
      : 'User Name';
    return (
      <View>
        <View style={styles.loginFormContainer}>
          {/* <Logo /> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.logo, {color: 'white'}]}>Outwit</Text>
            <Text style={styles.logo}>Story</Text>
          </View>
          <View style={{marginTop: verticalScale(40), alignItems: 'center'}}>
            <TextInput
              style={styles.textinput}
              placeholderTextColor="#e6e6e6"
              placeholder="User Name"
              onChangeText={this.UserNameUpdate}
            />
            {ifUsernameEmpty ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter User Name
              </Text>
            ) : null}
            <TextInput
              style={styles.textinput}
              placeholderTextColor="#e6e6e6"
              placeholder="Email"
              onChangeText={this.EmailUpdate}
            />
            {ifEmailEmpty ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter Email
              </Text>
            ) : null}
            <TextInput
              style={styles.textinput}
              placeholderTextColor="#e6e6e6"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={this.PasswordUpdate}
            />

            {ifPasswordEmpty ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter Password
              </Text>
            ) : null}
            <TextInput
              style={[styles.textinput, {}]}
              placeholderTextColor="#e6e6e6"
              placeholder="Repeat Password"
              onChangeText={this.RepeatPasswordUpdate}
            />

            {ifRepeatPasswordEmpty ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter The same Password again
              </Text>
            ) : null}
            <Buttons
              title={'SIGN UP '}
              styleme={[
                styles.loginsignupbuttons,
                {marginTop: verticalScale(30)},
              ]}
              textstyle={styles.TextStyle}
              onpress={this.onSignUp}
            />
          </View>
        </View>
      </View>
    );
  }
  render() {
    const {
      ifUsernameEmpty,
      ifEmailEmpty,
      ifPasswordEmpty,
      ifRepeatPasswordEmpty,
    } = this.state;
    return (
      <ScrollView>
        <KeyboardAwareScrollView>
          <View style={{flex: 1}}>
            {/* <LinearGradient
    //     startPoint={{x: 0.0, y: 0.25}}
    //     endPoint={{x: 0.5, y: 1.0}}
    //     locations={[0, 0.6]}
    //     colors={['#2b2b2b', '#141414']}
    //     style={{width: '100%', height: '100%', position: 'absolute'}}>
        {/* <Text>Log In here</Text> */}
            <ImageBackground
              source={require('../../../assets/bacj123.jpg')}
              style={{width: '100%', height: screenHeight}}
              blurRadius={1}>
              <View style={styles.container}>
                {this.renderInputView()}
                {/* <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: verticalScale(15),
              }}>
              <Text
                style={[
                  {fontSize: 15},
                  {fontWeight: '700'},
                  {fontFamily: 'Helvetica'},
                  {marginTop: verticalScale(30)},
                  {color: '#7d2427'},
                ]}>
                Forgotten Your Login details?
              </Text>
              <Text
                style={styles.TextStyle}
                onPress={() => Linking.openURL('https://google.com')}>
                Click here.
              </Text>
            </View> */}
                {/* <View
              style={{flexDirection: 'row', marginTop: 80, marginBottom: 20}}>
              <View
                style={{
                  backgroundColor: '#3e5e53',
                  height: 1,
                  flex: 1,
                  marginLeft: horizontalScale(40),
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#3e5e53',
                  paddingHorizontal: 5,
                  fontSize: 15,
                }}>
                OR
              </Text>
              <View
                style={{
                  backgroundColor: '#3e5e53',
                  height: 1,
                  flex: 1,
                  alignSelf: 'center',
                  marginRight: horizontalScale(40),
                }}
              />
            </View> */}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: ifUsernameEmpty
                      ? verticalScale(40)
                      : verticalScale(120),
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: 'white',
                      //   marginTop: verticalScale(120),
                    }}>
                    Already have an account ?
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#946715',
                      //   marginTop: verticalScale(118),
                    }}
                    onPress={() => Actions.login()}>
                    {' '}
                    LOG IN
                  </Text>
                </View>
              </View>
              {/* </LinearGradient> */}
            </ImageBackground>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  }
}

export default LoginForm;

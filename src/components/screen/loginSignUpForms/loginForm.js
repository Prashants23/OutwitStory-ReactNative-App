import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Linking,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../organism/Logo';
import Buttons from '../../atoms/buttons';
import {Actions} from 'react-native-router-flux';
import {
  verticalScale,
  horizontalScale,
} from '../../../utils/stylesheetawesomeproject';

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
    marginTop: verticalScale(120),
  },
});
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordvisibility: true,
      UserName: '',
      Password: '',
      UserNameValidation: false,
      PasswordValidation: false,
    };
  }
  UserNameUpdate = event => {
    this.setState({UserName: event});
  };
  PasswordUpdate = event => {
    this.setState({Password: event});
  };
  submitLogin = () => {
    if (this.state.UserName === '') {
      this.setState({UserNameValidation: true});
    } else {
      this.setState({UserNameValidation: false});
    }
    if (this.state.Password === '') {
      this.setState({PasswordValidation: true});
    } else {
      this.setState({PasswordValidation: false});
    }
  };
 
  renderInputView() {
    console.log(this.state.UserName);
    console.log(this.state.Password);
    return (
      <View>
        <View style={styles.loginFormContainer}>
          {/* <Logo /> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.logo, {color: 'white'}]}>Outwit</Text>
            <Text style={styles.logo}>Story</Text>
          </View>
          <View style={{marginTop: verticalScale(60), alignItems: 'center'}}>
            <TextInput
              style={styles.textinput}
              placeholderTextColor="#e6e6e6"
              placeholder="User Name"
              onChangeText={this.UserNameUpdate}
            />
            {this.state.UserNameValidation ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter User Name
              </Text>
            ) : null}
            <TextInput
              style={styles.textinput}
              placeholderTextColor="#e6e6e6"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={this.PasswordUpdate}
            />
            {this.state.PasswordValidation ? (
              <Text style={{color: '#b52626', fontSize: 16}}>
                Please enter Password
              </Text>
            ) : null}
            <View>
              <Text style={{color: '#946715', marginLeft: verticalScale(250)}}>
                Forgot Password?
              </Text>
            </View>
            <Buttons
              title={'Log In'}
              styleme={[
                styles.loginsignupbuttons,
                {marginTop: verticalScale(30)},
              ]}
              textstyle={styles.TextStyle}
              onpress={this.submitLogin}
            />
          </View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        {/* <LinearGradient
    //     startPoint={{x: 0.0, y: 0.25}}
    //     endPoint={{x: 0.5, y: 1.0}}
    //     locations={[0, 0.6]}
    //     colors={['#2b2b2b', '#141414']}
    //     style={{width: '100%', height: '100%', position: 'absolute'}}>
        {/* <Text>Log In here</Text> */}
        <ImageBackground
          source={require('../../../assets/bacj123.jpg')}
          style={{width: '100%', height: '100%'}}
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
                //   flex:1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: 'white',
                  marginTop: this.state.UserNameValidation
                    ? verticalScale(126)
                    : verticalScale(170),
                }}>
                Don't have an account ?
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: '#946715',
                  marginTop: this.state.UserNameValidation
                    ? verticalScale(126)
                    : verticalScale(170),
                }}
                onPress={() => Actions.register()}>
                {' '}
                SIGN UP
              </Text>
            </View>
          </View>
          {/* </LinearGradient> */}
        </ImageBackground>
      </View>
    );
  }
}

export default LoginForm;

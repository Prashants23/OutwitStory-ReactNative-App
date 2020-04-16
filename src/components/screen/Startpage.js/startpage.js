import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
// import { Dimensions } from "react-native";
import Buttons from '../../atoms/buttons';
import {
  verticalScale,
  horizontalScale,
} from '../../../utils/stylesheetawesomeproject';
// import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  card: {
    marginTop: 70,
    width: '50%',
    height: '50%',
    shadowColor: 'white',
    // color:'white'
  },
  welcometext: {
    // marginTop:30,
    fontSize: 35,
    fontWeight: '700',
    color: '#946715',
    textAlign: 'center',
    marginTop: verticalScale(40),
  },
  buttoncontainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: verticalScale(50),
    marginTop: verticalScale(120),
  },
  loginButton: {
    textAlign: 'center',
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#946715',
    marginRight: horizontalScale(5),
  },
  TextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  test: {
    width: '100%',
    height: '64%',
    backgroundColor: '#005aa7',
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
  },
});

class Startpage extends React.Component {
  login = () => {
    Actions.login();
  };
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ImageBackground
          source={require('../../../assets/back34.jpg')}
          style={{width: '100%', height: '100%', position: 'absolute'}}
          blurRadius={2}>
          {/* <LinearGradient
          startPoint={{x: 0.0, y: 0.25}}
          endPoint={{x: 0.5, y: 1.0}}
          locations={[0.0, 0.0, 0.0]}
          //   colors={['#005aa7','#27315c', '#fffde4']}
          colors={['#1d2340', '#1d2340', '#1d2340']}
          //   colors={['#005aa7', '#195A79']}
          style={{width: '100%', height: '100%', position: 'absolute'}}> */}
          {/* <View style={styles.test}> */}
          <View style={{alignItems: 'center'}}>
            {/* <Image
              style={styles.card}
              source={require('../../../assets/img.png')}
            /> */}
            <View style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.welcometext, {color: 'white'}]}>
                  Outwit
                </Text>
                <Text style={styles.welcometext}>Story</Text>
              </View>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: verticalScale(160),
                  color: '#946715',
                }}>
                Here You write your story and save it for forever
              </Text>
              {/* <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                for forever
              </Text> */}
            </View>
          </View>
          {/* </View> */}
          <View style={styles.buttoncontainer}>
            <View style={{flexDirection: 'row'}}>
              <Buttons
                onpress={() => Actions.replace('login')}
                title={'Sign In'}
                textstyle={styles.TextStyle}
                styleme={styles.loginButton}
              />
              <Buttons
                onpress={() => Actions.replace('register')}
                title={'Sign Up'}
                textstyle={styles.TextStyle}
                styleme={[styles.loginButton, {marginLeft: verticalScale(5)}]}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <Text
                style={[
                  {
                    fontSize: 15,
                    color: '#946715',
                    marginTop: verticalScale(20),
                  },
                  {fontWeight: '700'},
                  {fontFamily: 'Helvetica'},
                ]}>
                Once upon a time...
              </Text>
              {/* <Text style={styles.TextStyle} onPress={() => Linking.openURL('https://google.com')} > Sign Up.</Text> */}
            </View>
          </View>
          {/* </LinearGradient> */}
        </ImageBackground>
      </View>
    );
  }
}
export default Startpage;

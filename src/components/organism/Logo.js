import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {verticalScale} from '../../utils/stylesheetawesomeproject';

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 100,
    padding: 50,
    color: 'black',
    fontSize: 50,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: verticalScale(130),
    marginBottom: verticalScale(90),
    //    marginLeft:70

    // textAlign:"center"
  },
  ifText: {
    fontSize: 50,
    fontWeight: '700',
    color: '#155947',
  },
});

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Text style={styles.ifText}>OutwitStory</Text>
        {/* <Image
                 source={require('../../assets/logo.png')}
                 style={styles.logo}
                 alt="logo"/> */}
      </View>
    );
  }
}
export default Logo;

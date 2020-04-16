import {Platform, StyleSheet, Dimensions} from 'react-native';
//   import DeviceInfo from 'react-native-device-info';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (deviceWidth / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (deviceHeight / guidelineBaseHeight) * size;
export const horizontalScale = size =>
  (deviceWidth / guidelineBaseWidth) * size;
//   const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

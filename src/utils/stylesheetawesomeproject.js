import {
  Platform,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
//   import DeviceInfo from 'react-native-device-info';

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (Width / guidelineBaseWidth) * size;
export const verticalScale = size => (Height / guidelineBaseHeight) * size;
export const horizontalScale = size => (Width / guidelineBaseWidth) * size;
//   const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
// export const Width = useWindowDimensions().width;
// export const Height = useWindowDimensions().height;

// ghjklk;bhbkjnlk//tufyighijk

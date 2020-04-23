import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Buttons from '../../../atoms/buttons';
import {
  verticalScale,
  horizontalScale,
  Height,
  Width,
} from '../../../../utils/stylesheetawesomeproject';
import LinearGradient from 'react-native-linear-gradient'

const styles1 = StyleSheet.create({
  buttons: {
    alignItems:'center',
    // textAlign: 'center',
    width: 150,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#946715',
    backgroundColor: '#000a12',
    // marginRight: horizontalScale(5),
    // marginTop: verticalScale(10),
    // marginLeft: horizontalScale(40),
  },

  ButtonTextStyle: {
    color: '#a9d1c3',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

class MoreOptionsCards extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {
      title1,
      title2,
      title1Style,
      title2Style,
      cardContainer,
      content,
      buttonTitle,
      styles,
      contentstyle,
      onpress,
      leniarGradientColor2,
      leniarGradientColor1,
    } = this.props;
    return (
      <View  style={[styles, styles.shadowbox]}>
         
        <View style={cardContainer}>
          <Text
            style={{color: '#cff2ff', fontWeight: '700', letterSpacing: 0.5}}>
            OutwitStory's
          </Text>
          <Text style={title1Style}>{title1}</Text>
          <Text style={title2Style}>{title2}</Text>
          <Text style={[contentstyle, {height: Height * 0.2}]}>{content}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Buttons
            title={buttonTitle}
            styleme={[styles1.buttons]}
            textstyle={styles1.ButtonTextStyle}
            onpress={onpress}
          />
        </View>
      </View>
    );
  }
}

export default MoreOptionsCards;

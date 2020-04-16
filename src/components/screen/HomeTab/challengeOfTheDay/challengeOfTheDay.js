import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Buttons from '../../../atoms/buttons';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  challengestory: {
    height: 500,
    borderColor: '#e6c875',
    width: '96%',
    // /paddingTop: 0,
    textAlignVertical: 'top',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: 'blue',
    borderWidth: 1,
  },
  TitleText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#e6c875',
  },
  story: {
    marginLeft: horizontalScale(7),
    fontSize: 16,
    fontWeight: '400',
  },
  buttonConatiner: {
    alignItems: 'center',
  },
  ParticipateButton: {
    marginTop: verticalScale(15),
    justifyContent: 'center',
    width: horizontalScale(180),
    height: verticalScale(50),
    backgroundColor: '#1f3454',
    borderColor: '#946715',
    borderWidth: 2,
    borderRadius: 8,
  },
  TextStyle: {
    color: '#a9d1c3',
    // paddingTop:10,
    fontSize: 14,
    fontWeight: '700',
    // marginTop: verticalScale(7),
    textAlign: 'center',
  },
});
class ChallengOfTheDay extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ImageBackground
        source={require('../../../../assets/participatebackground.jpg')}
        style={{width: '100%', height: '100%'}}
        blurRadius={1}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.challengestory}>
            <View>
              <Text style={styles.TitleText}>Widow of this Realm</Text>
            </View>
            <ScrollView>
              <View>
                <Text style={{textAlign: 'center'}}>Instruction</Text>
              </View>
              <View>
                <Text style={styles.story}>Story</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.buttonConatiner}>
            <Buttons
              title={'Participate'}
              styleme={styles.ParticipateButton}
              textstyle={styles.TextStyle}
              onpress={() => Actions.Participate()}
            />
          </View>
</View>
      </ImageBackground>
    );
  }
}
export default ChallengOfTheDay;

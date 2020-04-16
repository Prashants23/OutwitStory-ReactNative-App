import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../../atoms/buttons';
import CustomIcon from '../../../atoms/CustomIcon';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  Title: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(75),
    justifyContent: 'center',
  },
  TitleText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: '#e6c875',
  },
  textInput: {
    width: horizontalScale(320),
    height: verticalScale(420),
    // borderBottomWidth: 2,
    // borderWidth: 2,
    borderColor: '#e6c875',
    // /paddingTop: 0,
    textAlignVertical: 'top',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    fontSize: 16,
    color: 'black',
    paddingTop: 5,
  },
  buttonConatiner: {
    alignItems: 'center',
  },
  SubmitButton: {
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
class Participate extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../../../assets/participatebackground.jpg')}
        style={{width: '100%', height: '100%'}}
        blurRadius={1}>
        <ScrollView>
          <View>
            <View style={{flexDirection: 'row'}}>
              <CustomIcon
                name={'back'}
                size={35}
                style={{marginTop: 10}}
                onPress={() => Actions.ChallengeOfTheDayfile()}
              />
              <View style={styles.Title}>
                <Text style={styles.TitleText}>Challenge Name</Text>
                <Text style={[styles.TitleText, {color: '#1f3454'}]}>
                  Widow of This Realm
                </Text>
              </View>
            </View>
            <KeyboardAwareScrollView>
              <View
                style={{alignItems: 'center', marginTop: verticalScale(20)}}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Write your Story Here"
                  multiline={true}
                  style={styles.textInput}
                />
              </View>
            </KeyboardAwareScrollView>
            <View style={styles.buttonConatiner}>
              <Buttons
                styleme={styles.SubmitButton}
                textstyle={styles.TextStyle}
                title={'Submit'}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
export default Participate;

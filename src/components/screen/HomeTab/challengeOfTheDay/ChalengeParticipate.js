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
import Toolbars from '../../../atoms/Toolbar';

const styles = StyleSheet.create({
  Title: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(80),
    justifyContent: 'center',
    marginVertical: verticalScale(20),
    marginBottom: 10,
  },
  TitleText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: 'black',
    marginTop: 5,
    letterSpacing: 2,
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
    paddingLeft: 15,
    paddingRight: 10,
    letterSpacing: 1,
    lineHeight: 35,
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
    alignItems: 'center',
  },
  TextStyle: {
    color: '#a9d1c3',
    // paddingTop:10,
    fontSize: 16,
    fontWeight: '700',
    // marginTop: verticalScale(7),
    textAlign: 'center',
    letterSpacing: 1,
  },
});
class Participate extends React.Component {
  render() {
    const {onpress} = this.props;
    return (
      <View>
        <Toolbars />
        <ScrollView>
          <View>
            <View>
              <View style={styles.Title}>
                <Text style={styles.TitleText}>Challenge Name</Text>
                <Text style={[styles.TitleText]}>Widow of This Realm</Text>
              </View>
            </View>
            <KeyboardAwareScrollView>
              <View
                style={{alignItems: 'center', marginTop: verticalScale(20)}}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Write your Story Here"
                  placeholderTextColor="black"
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
      </View>
    );
  }
}
export default Participate;

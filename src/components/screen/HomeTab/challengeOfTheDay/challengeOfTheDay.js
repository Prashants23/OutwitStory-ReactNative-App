import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  TouchableNativeFeedbackBase,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Buttons from '../../../atoms/buttons';
import {
  verticalScale,
  horizontalScale,
  Height,
  Width,
} from '../../../../utils/stylesheetawesomeproject';
import Participate from './ChalengeParticipate';
import Toolbars from '../../../atoms/Toolbar';
import CustomIcon from '../../../atoms/CustomIcon';

const styles = StyleSheet.create({
  challengestory: {
    height: Height * 0.75,
    borderColor: '#e6c875',
    width: Width * 0.97,
    // /paddingTop: 0,
    textAlignVertical: 'top',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    // backgroundColor: 'blue',
    // borderWidth: 1,
  },
  TitleText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    width: '96%',
    marginHorizontal: horizontalScale(Height * 0.0068),
  },
  story: {
    marginLeft: horizontalScale(Height * 0.0068),
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  buttonConatiner: {
    alignItems: 'center',
  },
  ParticipateButton: {
    marginTop: verticalScale(15),
    justifyContent: 'center',
    width: horizontalScale(Width * 0.45),
    height: verticalScale(Height * 0.06),
    backgroundColor: '#1f3454',
    // backgroundColor:'#89bce8',
    borderColor: '#946715',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
  },
  TextStyle: {
    color: '#a9d1c3',
    // color:'white',
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
    this.state = {
      ifParticipate: false,
    };
  }

  ifParticipate = () => {
    this.setState({ifParticipate: !this.state.ifParticipate});
  };
  render() {
    const {onpress} = this.props;
    return (
      <View style={{height: Height}}>
        <Toolbars />
        {/* <CustomIcon
          name="back-2"
          size={20}
          color="black"
          style={{marginTop: 10, marginLeft: 10}}
          onPress={onpress}
        /> */}
        <Buttons
          buttonIcon={'back-2'}
          buttonIconSize={16}
          iconStyle={{paddingTop:4,marginHorizontal:7}}
          title={'Home'}
          onpress={onpress}
          textstyle={{fontSize:16,color:'blue'}}
        />

        {/* <Buttons title={'cross button'} onpress={this.props.onpress} /> */}
        <View
          style={{
            alignItems: 'center',
            marginVertical: verticalScale(Height * 0.0),
          }}>
          <Text style={{fontSize: 15}}>Challeng Of TheDay</Text>
          <View style={styles.challengestory}>
            <View>
              <Text style={styles.TitleText}>" Widow of this Realm "</Text>
            </View>
            <ScrollView>
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
              onpress={this.ifParticipate}
            />
          </View>
        </View>
        <Modal
          animationType="slide"
          onRequestClose={this.ifParticipate}
          transparent={false}
          visible={this.state.ifParticipate}>
          <Participate onpress={this.ifParticipate} />
        </Modal>
      </View>
    );
  }
}
export default ChallengOfTheDay;

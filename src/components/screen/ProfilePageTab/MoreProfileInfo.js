import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {Stack, Router, Scene} from 'react-native-router-flux';
import Profile from './Profile1';
import Navigation from '../../../navigation';
import Home from '../HomeTab/StoryOfTheDayTab/Home1';
import Addnewstory from '../AddNewStoryTab/Addnewstory';
import Buttons from '../../atoms/buttons';
import {
  verticalScale,
  horizontalScale,
  Height,
  Width
} from '../../../utils/stylesheetawesomeproject';
import CustomIcon from '../../atoms/CustomIcon';
import LinearGradient from 'react-native-linear-gradient';

// const height = () => {
//   useWindowDimensions().height;
// };
// const {Width, Height} = useWindowDimensions();

const styles = StyleSheet.create({
  NameContainer: {
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    height: 100,
    elevation: 8,
  },
  NameText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    letterSpacing: 4,
    elevation: 8,
  },
  titleText: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '700',
    letterSpacing: 3,
  },
  innerTabContainerHome: {
    backgroundColor: 'black',
    height: 90,
    // flex:1
    // top: 0,
  },
});
const buttonsContainer = StyleSheet.create({
  buttonsContainers: {
    // marginTop: verticalScale(50),
    // marginLeft: horizontalScale(25),
    // width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 0,
  },
  iconStyle: {
    paddingTop: 2,
    paddingLeft: 15,
  },
  buttons: {
    marginTop: 20,
    width: 100,
    height: 30,
  },
  buttonText: {
    fontSize: 14,
    // paddingTop: 20,
    // paddingBottom: 20,
    color: 'black',
    letterSpacing: 1,
    paddingLeft: 6,
    // paddingRight:10
  },
  logooutButtonSettingButton: {
    height: 20,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logooutButtonSettingText: {
    textAlign: 'center',
    color: 'black',
    letterSpacing: 0.75,
    fontSize: 14,
    paddingLeft: 6,
    paddingRight: 10,
  },
});

const contentDisplay = StyleSheet.create({
  contentContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    width: '97%',
    marginTop: 10,
    // width: Height,
  },
});

const OtherOptionModalContainer = StyleSheet.create({
  Modal: {
    height: 100,
    width: '100%',
    // backgroundColor: 'white',
    position: 'absolute',
    // justifyContent:'flex-end',
    alignItems: 'flex-end',
  },
  innerView: {
    width: 150,
    backgroundColor: 'white',
    marginTop: 20,
    marginRight: 30,
    height: 150,
    alignItems: 'center',
    borderRadius: 8,
    opacity: 0.7,
  },
  options: {
    width: 100,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
    color: 'black',
    letterSpacing: 1,
    // borderBottomColor:'white',
    // borderBottomWidth:0.5,
    paddingBottom: 5,
  },
});

class MoreProfileInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      ifStories: true,
      ifBooks: false,
      ifMyJournal: false,
      ifDisplayModal: false,
    };
  }

  contentTypeChange = event => {
    const {ifStories, ifBooks, ifMyJournal} = this.state;
    this.setState(
      event === 'Stories'
        ? {ifStories: true, ifBooks: false, ifMyJournal: false}
        : event === 'Books'
        ? {ifStories: false, ifBooks: true, ifMyJournal: false}
        : event === 'Journal'
        ? {ifStories: false, ifBooks: false, ifMyJournal: true}
        : null,
    );
  };

  displayModal = () => {
    this.setState({ifDisplayModal: true});
  };
  closeModal = () => {
    this.setState({ifDisplayModal: false});
  };

  renderStories() {
    return (
      <View style={{height: Height - 280}}>
        <Text style={{color: 'white', paddingVertical: 50}}>Stories</Text>
      </View>
    );
  }
  renderBook() {
    return (
      <View style={{height: Height - 280}}>
        <Text style={{color: 'white'}}>Books</Text>
      </View>
    );
  }

  renderMyJournal() {
    return (
      <View style={{height: Height - 280}}>
        <Text style={{color: 'white'}}>Journal</Text>
      </View>
    );
  }
  render() {
    const {onpress} = this.props;
    const {ifBooks, ifMyJournal, ifStories, ifDisplayModal} = this.state;
    return (
      <View style={{height: verticalScale(Height - 240)}}>
        <LinearGradient
          startPoint={{x: 0.0, y: 0.25}}
          endPoint={{x: 0.5, y: 1.0}}
          locations={[0.2, 0.6]}
          colors={['#5497d1', '#f2f9ff']}
          // colors={['#f2f9ff', '#000a12']}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 20,
            }}>
            <CustomIcon
              name="menu"
              size={25}
              color="black"
              onPress={this.displayModal}
            />
            {ifDisplayModal ? (
              <Modal
                onRequestClose={() => this.closeModal()}
                // animationType=""
                transparent={true}
                visible={this.state.ifmoreDetails}
                // style={OtherOptionModalContainer.Modal}
              >
                <View style={OtherOptionModalContainer.Modal}>
                  <View style={OtherOptionModalContainer.innerView}>
                    <Text
                      onPress={this.closeModal}
                      style={{
                        color: 'black',
                        textAlign: 'right',
                        width: 120,
                        fontSize: 18,
                      }}>
                      x
                    </Text>
                    <Text
                      style={OtherOptionModalContainer.options}
                      onPress={onpress}>
                      Profile
                    </Text>
                    <Text style={OtherOptionModalContainer.options}>
                      Messages
                    </Text>
                    <Text style={OtherOptionModalContainer.options}>
                      logout
                    </Text>
                  </View>
                </View>
              </Modal>
            ) : null}
          </View>
          <View style={styles.NameContainer}>
            {/* <Image
              source={require('../../../assets/pks.jpg')}
              style={{width: 60, height: 60, borderRadius: 50}}
            /> */}
            {/* <Text onPress={onpress} style={{color:'white',letterSpacing:0.5}}>Profile Page</Text> */}
            <Text style={styles.NameText}>Prashant Kumar Shukla</Text>
            <Text style={styles.titleText}>Author</Text>

            {/* <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.ifmoreDetails}>
          <CustomIcon name='menu' size/>
        </Modal> */}
          </View>
          <View
            style={{
              // height: Height - 185,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={[buttonsContainer.buttonsContainers]}>
              <Buttons
                title={'Stories'}
                styleme={[
                  buttonsContainer.buttons,
                  [
                    ifStories
                      ? {borderBottomWidth: 1, borderColor: 'black'}
                      : null,
                  ],
                ]}
                textstyle={buttonsContainer.buttonText}
                onpress={() => this.contentTypeChange('Stories')}
                buttonIcon={'pencil'}
                buttonIconSize={14}
                iconStyle={buttonsContainer.iconStyle}
              />
              <Buttons
                title={'Books'}
                styleme={[
                  buttonsContainer.buttons,
                  [
                    ifBooks
                      ? {borderBottomWidth: 1, borderColor: 'black'}
                      : null,
                  ],
                ]}
                textstyle={buttonsContainer.buttonText}
                onpress={() => this.contentTypeChange('Books')}
                buttonIcon={'pencil'}
                buttonIconSize={14}
                iconStyle={buttonsContainer.iconStyle}
              />
              <Buttons
                title={'Journal'}
                styleme={[
                  buttonsContainer.buttons,
                  [
                    ifMyJournal
                      ? {borderBottomWidth: 1, borderColor: 'black'}
                      : null,
                  ],
                ]}
                textstyle={buttonsContainer.buttonText}
                onpress={() => this.contentTypeChange('Journal')}
                buttonIcon={'pencil'}
                buttonIconSize={14}
                iconStyle={buttonsContainer.iconStyle}
              />
              {/* <Buttons
                title={'Profile'}
                styleme={buttonsContainer.buttons}
                textstyle={buttonsContainer.buttonText}
                onpress={onpress}
              /> */}
            </View>
            {/* </ScrollView> */}
            <View style={[contentDisplay.contentContainer]}>
              {ifStories
                ? this.renderStories()
                : ifBooks
                ? this.renderBook()
                : ifMyJournal
                ? this.renderMyJournal()
                : null}
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15}}>
            <Buttons
              styleme={[buttonsContainer.logooutButtonSettingButton]}
              textstyle={buttonsContainer.logooutButtonSettingText}
              title={'Setting'}
              buttonIcon={'cog'}
              buttonIconSize={14}
              iconStyle={buttonsContainer.iconStyle}
            />
            <Buttons
              styleme={[
                buttonsContainer.logooutButtonSettingButton,
                {borderLeftWidth: 1, borderColor: 'blue'},
              ]}
              textstyle={buttonsContainer.logooutButtonSettingText}
              title={'logout'}
              iconStyle={buttonsContainer.iconStyle}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}
export default MoreProfileInfo;

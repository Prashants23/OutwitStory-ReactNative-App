import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Modal,
  Dimensions,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  Width,
  Height,
} from '../../../../utils/stylesheetawesomeproject';
import LinearGradient from 'react-native-linear-gradient';
import Stories from '../../WritingStory/Stories';
// import CustomIcon from '../../atoms/CustomIcon';
import Cards from './cards';
// import {Actions} from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';
import MoreOptionsCards from './MoreOptions';
// import Toolbars from '../../../atoms/Toolbar';
import CustomIcon from '../../../atoms/CustomIcon';
import ChallengOfTheDay from '../challengeOfTheDay/challengeOfTheDay';
import {Actions} from 'react-native-router-flux';
import ShortStoriesModal from './ShortStoriesPage1';

const MoreOptionTextColor = '#168b91';
//  '#cff2ff';

// const MoreOptionTextColor = '#527885';
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#000a12',
    // backgroundColor: '#ebfaff',
    height: Height,
    justifyContent: 'center',
    // marginTop: verticalScale(0),
  },
  GenerHeader: {
    fontSize: 18,
    color: '#b1b7c9',
    marginLeft: 10,
    fontWeight: '700',
    borderBottomColor: '#946715',
    borderBottomWidth: 1,
    // marginTop: verticalScale(10),
  },
  AuthorImage: {
    height: 60,
    width: 60,
    marginLeft: 30,
    borderRadius: 20,
  },

  AuthorName: {
    marginLeft: Width * 0.06,
    marginTop: 10,
    fontSize: 16,
  },
  MoreOptions: {
    marginTop: verticalScale(20),
    // color: 'black',
    color: MoreOptionTextColor,
    marginHorizontal: horizontalScale(Width * 0.063),
    letterSpacing: 1,
    fontSize: 18,
    width: Width * 0.68,
  },
  MoreOptionName: {
    marginTop: verticalScale(140),
    // color: '#cff2ff',
    // color: 'black',
    color: MoreOptionTextColor,
    marginHorizontal: horizontalScale(15),
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 2,
  },
  MoreOptionSomething: {
    marginTop: verticalScale(30),
    // color: '#cff2ff',
    // color: 'black',
    color: MoreOptionTextColor,
    fontSize: 30,
    width: 250,
    marginHorizontal: horizontalScale(15),
  },
  MoreOptionSomethingQuote: {
    marginTop: verticalScale(20),
    // color: '#cff2ff',
    // color: 'black',
    color: MoreOptionTextColor,
    marginHorizontal: horizontalScale(15),
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    width: 250,
  },
  cardContainer: {
    marginTop: verticalScale(200),
    marginLeft: horizontalScale(10),
  },
  ShortStoriesCard: {
    // backgroundColor: '#63d5ff',
    // marginTop: 30,
    height: Height * 0.8,
    width: Width * 0.69,
    backgroundColor: '#425396',
    borderRadius: 28,
    // borderBottomRightRadius:20,
    // borderTopLeftRadius:20,
    // shadowColor: 'black',
    elevation: 6,
    marginBottom: 10,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    shadowOpacity: 0.5,
    // shadowRadius: 25,
    // borderRadius: 8,
    marginLeft: 18,
  },
  storiesCardTitle1: {
    marginTop: verticalScale(10),
    width: Width * 0.65 - 35,
    // marginHorizontal: horizontalScale(10),
    color: '#cff2ff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.5,
    height: Height * 0.03,
    // marginLeft:20,
  },
  storiesCardTitle2: {
    marginTop: verticalScale(5),
    width: Width * 0.65 - 35,
    // marginHorizontal: horizontalScale(10),
    color: '#cff2ff',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 1.5,
    height: Height * 0.07,
    // marginLeft:20,
  },
  contentOnCardStyles: {
    fontSize: 15,
    color: '#cff2ff',
    width: Width * 0.65 - 20,
    marginTop: 15,
    marginRight: 10,
    letterSpacing: 0.75,
  },
});
// const ButtonStyle=StyleSheet.create({.

//   buttons: {
//     textAlign: 'center',
//     width: 120,
//     paddingTop: 10,
//     paddingBottom: 10,
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '700',
//     borderRadius: 15,
//     // borderWidth: 2,
//     borderColor: '#946715',
//     backgroundColor: '#000a12',
//     // marginRight: horizontalScale(5),
//     // marginTop: verticalScale(10),
//     // marginLeft: horizontalScale(40),
//   },

//   ButtonTextStyle: {
//     color: '#a9d1c3',
//     fontSize: 14,
//     fontWeight: '700',
//     textAlign: 'center',
//   },
// })
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Stories1: [],
      expand: false,
      id: '',
      ifChallengeModal: false,
      ifAllShortStoriesModal: false,
      // commentId: ''
    };
  }
  componentDidMount() {
    this.setState({Stories1: Stories});
  }
  challengeModal = () => {
    this.setState({
      ifChallengeModal: !this.state.ifChallengeModal,
      // commentId: event,
    });
  };
  AllShortStoriesModal = () => {
    this.setState({ifAllShortStoriesModal: !this.state.ifAllShortStoriesModal});
  };

  renderMoreOptions() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // pagingEnabled={true}
        >
          <View style={{flexDirection: 'row'}}>
            <View style={styles.MoreOptions}>
              <View>
                <Image
                  style={styles.AuthorImage}
                  source={require('../../../../assets/pks.jpg')}
                  // onPress={() => console.log("I am Clicking on image")}
                />
                <Text
                  style={styles.AuthorName}
                  onPress={() => Actions.ProfilePageContainer()}>
                  Prashant
                </Text>
              </View>
              <Text style={styles.MoreOptionName}>hi, Prashant</Text>
              <Text style={styles.MoreOptionSomething}>
                read something new today
              </Text>
              <Text style={styles.MoreOptionSomethingQuote}>
                a reader lives a thousand lives before he dies.. a writer never
                dies..
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: MoreOptionTextColor,
                    marginTop: 30,
                    marginLeft: 20,
                    letterSpacing: 1,
                    fontSize: 18,
                  }}>
                  {' '}
                  Slide{' > >'}
                </Text>
                {/* <CustomIcon
                  style={{marginLeft: 20, marginTop: 20}}
                  name="back-2"
                  size={40}
                  color={MoreOptionTextColor} //color="white"
                /> */}
              </View>
            </View>
            <View style={{marginRight: 20}}>
              <MoreOptionsCards
                styles={styles.ShortStoriesCard}
                cardContainer={styles.cardContainer}
                title1Style={styles.storiesCardTitle1}
                title2Style={styles.storiesCardTitle2}
                title1={"today's"}
                title2={'Challange'}
                titleStyle={styles.storiesCardTitle}
                buttonTitle={'View Challenge'}
                content={
                  '“A good [short story] would take me out of myself and then stuff me back in, outsized, now, and uneasy with the fit.”'
                }
                contentstyle={styles.contentOnCardStyles}
                onpress={this.challengeModal}
              />
            </View>
            <View style={{marginRight: 20}}>
              <MoreOptionsCards
                styles={[styles.ShortStoriesCard, {backgroundColor: '#144059'}]}
                cardContainer={styles.cardContainer}
                title1Style={styles.storiesCardTitle1}
                title2Style={styles.storiesCardTitle2}
                title1={'short'}
                title2={'Stories'}
                titleStyle={styles.storiesCardTitle}
                buttonTitle={'Read Stories'}
                content={
                  '“A good [short story] would take me out of myself and then stuff me back in, outsized, now, and uneasy with the fit.”'
                }
                contentstyle={[styles.contentOnCardStyles]}
                onpress={this.AllShortStoriesModal}
              />
            </View>
            <View style={{marginRight: 20}}>
              <MoreOptionsCards
                cardContainer={styles.cardContainer}
                titleStyle={styles.storiesCardTitle}
                contentstyle={styles.contentOnCardStyles}
                title1Style={styles.storiesCardTitle1}
                title2Style={styles.storiesCardTitle2}
                content={'“True emotions yearn for genre love of God”'}
                title1={'read by'}
                title2={'Categories'}
                buttonTitle={'Read Stories'}
                // buttonStyle={{marginTop:'40'}}
                styles={[styles.ShortStoriesCard, {backgroundColor: '#1d2f57'}]}
              />
            </View>
            <View style={{marginRight: 20}}>
              <MoreOptionsCards
                cardContainer={styles.cardContainer}
                title1Style={styles.storiesCardTitle1}
                title2Style={styles.storiesCardTitle2}
                contentstyle={styles.contentOnCardStyles}
                content={
                  "“Don't classify me, read me. I'm a writer, not a genre.”"
                }
                title1={'write'}
                title2={'Something'}
                buttonTitle={'Click Me'}
                styles={[styles.ShortStoriesCard, {backgroundColor: '#092b75'}]}
                onpress={() => Actions.Addnewstoryfile()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderModals() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.ifChallengeModal}
          onRequestClose={this.challengeModal}>
          <ChallengOfTheDay onpress={this.challengeModal} />
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.ifAllShortStoriesModal}
          onRequestClose={this.AllShortStoriesModal}>
          <ShortStoriesModal onpress={this.AllShortStoriesModal} />
        </Modal>
      </View>
    );
  }
  render() {
    const {Stories1, ifcommentModal, commentId} = this.state;
    const filteredComments = Stories1.filter(user =>
      user.id === commentId ? user.comments : null,
    );
    return (
      <View style={[styles.MainContainer]}>
        <LinearGradient
          startPoint={{x: 0.0, y: 0.25}}
          endPoint={{x: 0.5, y: 1.0}}
          locations={[0.2, 0.6]}
          colors={['#5497d1', '#f2f9ff']}
          // colors={['#f2f9ff', '#000a12']}
          style={{height: Height, justifyContent: 'center'}}>
          {/* {this.renderMostRead()} */}
          {this.renderMoreOptions()}
          {this.renderModals()}
          {/* </ImageBackground> */}
        </LinearGradient>
      </View>
    );
  }
}
export default Home;

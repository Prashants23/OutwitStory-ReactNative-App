import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Toolbars from '../../../atoms/Toolbar';
import {Height, Width} from '../../../../utils/stylesheetawesomeproject';
import MostReadShortStories from './MostReadShortStories';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import SituationBasedStories from './SituationBasedStories';
import CustomIcon from '../../../atoms/CustomIcon';
import SearchBox from '../../../atoms/Searchbar';
import Buttons from '../../../atoms/buttons';

const optionContainer = StyleSheet.create({
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    width: Width - 30,
    // backgroundColor: 'red',
    height: 60,
  },
  //   optionTitle: {
  //     width: Width * 0.35,
  //     fontSize: 16,
  //     color: 'gray',
  //     textAlign: 'center',
  //     // backgroundColor:''
  //     borderWidth: 2,
  //     height: 40,
  //     // alignItems:'center'
  //     justifyContent: 'center',
  //   },
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
    paddingTop: 4,
    // paddingLeft: 15,
  },
  buttons: {
    marginTop: 20,
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 19,
  },
  buttonTextBefore: {
    fontSize: 14,
    // paddingTop: 20,
    // paddingBottom: 20,
    color: 'gray',
    letterSpacing: 1,
    paddingLeft: 6,

    textAlign: 'center',
    // paddingRight:10
  },
  buttonTextAfter: {
    fontSize: 16,
    color: 'black',
    letterSpacing: 1,
    paddingLeft: 6,
    textAlign: 'center',
  },
});

const SearchBoxContainer = StyleSheet.create({
  SearchBox: {
    height: Height * 0.13,
  },
});
class ShortStoriesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ifRecent: true,
      ifMostView: false,
      ifAll: false,
      ifButtonActiveOrInctive: buttonsContainer.buttonTextBefore,
      //   ifDisplayModal: false,
    };
  }

  contentTypeChange = event => {
    // const {ifRecent, ifMostView, ifAll} = this.state;
    this.setState(
      event === 'Recent'
        ? {ifRecent: true, ifMostView: false, ifAll: false}
        : event === 'MostView'
        ? {ifRecent: false, ifMostView: true, ifAll: false}
        : event === 'All'
        ? {ifRecent: false, ifMostView: false, ifAll: true}
        : null,
    );
  };

  displayModal = () => {
    this.setState({ifDisplayModal: true});
  };
  closeModal = () => {
    this.setState({ifDisplayModal: false});
  };

  renderRecent() {
    return (
      <View style={{height: Height - 15}}>
        {/* <Text style={{color: 'black', paddingVertical: 50}}></Text> */}
        <SituationBasedStories />
      </View>
    );
  }
  renderMostViewed() {
    return (
      <View style={{height: Height - 280}}>
        <Text style={{color: 'black'}}>Most Viewed</Text>
      </View>
    );
  }

  renderAll() {
    return (
      <View style={{height: Height - 280}}>
        <Text style={{color: 'black'}}>All</Text>
      </View>
    );
  }

  renderActiveButtonLine() {
    return <View style={{height: 2, width: 40, backgroundColor: '#24b4ed'}} />;
  }
  render() {
    const {ifMostView, ifAll, ifRecent} = this.state;
    return (
      <View>
        <Toolbars />
        <View style={{alignItems: 'center'}}>
          <View style={SearchBoxContainer.SearchBox}>
            <SearchBox />
          </View>
          <View style={optionContainer.options}>
            <View style={{alignItems: 'center'}}>
              <Buttons
                title={'Recent'}
                styleme={[buttonsContainer.buttons]}
                textstyle={[
                  ifRecent
                    ? buttonsContainer.buttonTextAfter
                    : buttonsContainer.buttonTextBefore,
                ]}
                onpress={() => this.contentTypeChange('Recent')}
                // buttonIcon={'pencil'}
                // buttonIconSize={14}
                // iconStyle={buttonsContainer.iconStyle}
              />
               {ifRecent ? this.renderActiveButtonLine() : null}
            </View>
            <View style={{alignItems: 'center'}}>
              <Buttons
                title={'Books'}
                styleme={[buttonsContainer.buttons]}
                textstyle={[
                  ifMostView
                    ? buttonsContainer.buttonTextAfter
                    : buttonsContainer.buttonTextBefore,
                ]}
                onpress={() => this.contentTypeChange('MostView')}
                //   buttonIcon={'pencil'}
                //   buttonIconSize={14}
                //   iconStyle={buttonsContainer.iconStyle}
              />
              {ifMostView ? this.renderActiveButtonLine() : null}
            </View>
            <View style={{alignItems: 'center'}}>
              <Buttons
                title={'All'}
                styleme={[buttonsContainer.buttons]}
                textstyle={[
                  ifAll
                    ? buttonsContainer.buttonTextAfter
                    : buttonsContainer.buttonTextBefore,
                ]}
                onpress={() => this.contentTypeChange('All')}
                //   buttonIcon={'pencil'}
                //   buttonIconSize={14}
                //   iconStyle={buttonsContainer.iconStyle}
              />
              {ifAll ? this.renderActiveButtonLine() : null}
            </View>
          </View>
          {/* <ScrollView horizontal={true}> */}
          <View>
            {ifRecent
              ? this.renderRecent()
              : ifMostView
              ? this.renderMostViewed()
              : ifAll
              ? this.renderAll()
              : null}
          </View>
          {/* </ScrollView> */}
          <Text>SearchBar</Text>
          <Text>Categories</Text>
          <Text>Stories content</Text>
        </View>
      </View>
    );
  }
}

export default ShortStoriesPage;

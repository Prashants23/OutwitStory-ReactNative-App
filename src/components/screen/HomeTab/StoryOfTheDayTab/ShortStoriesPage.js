import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Toolbars from '../../../atoms/Toolbar';
import {Height} from '../../../../utils/stylesheetawesomeproject';
import MostReadShortStories from './MostReadShortStories';
import {ScrollView} from 'react-native-gesture-handler';
import SituationBasedStories from './SituationBasedStories';
import CustomIcon from '../../../atoms/CustomIcon';

const header = StyleSheet.create({
  Text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#232d40',
    fontWeight: '700',
    marginTop: 10,
  },
});
const renderMostRead = StyleSheet.create({
  mostReadContainer: {
    alignItems: 'center',
    height: 'auto',
    // backgroundColor: 'white',
    width: '100%',
  },
  header: {
    height: 25,
    fontSize: 16,
    color: '#0a121f',
    letterSpacing: 0.5,
    fontWeight: '700',
    flexDirection: 'row',
  },
  forwardIcon: {flex: 1, alignItems: 'flex-end', marginRight: 10},
  headerContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 19,
  },
});

class ShortStoriesModal extends React.Component {
  renderheaderTitle({title, Icon}) {
    return (
      <View style={renderMostRead.headerContainer}>
        <Text style={renderMostRead.header}>{title}</Text>
        <View style={renderMostRead.forwardIcon}>
          <CustomIcon name={Icon} size={16} color="#0a121f" />
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={{backgroundColor: '#e6efff', height: Height}}>
        <Toolbars />
        <View>
          <Text style={header.Text}>OutwitStory's Short Stories</Text>
        </View>
        <View style={{height: Height*0.35}}>
          {this.renderheaderTitle('Most Read')}
          <MostReadShortStories />
        </View>
        <View style={{ height: Height * 0.8}}>
          {this.renderheaderTitle('Read categories wise short Stories')}
          <ScrollView
            nestedScrollEnabled={true}
            horizontal={true}
            scrollIndicatorInsets={false}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              {/* <View style={StyleSheet.absoluteFill}> */}
                <SituationBasedStories />
              {/* </View> */}
            </ScrollView>
            <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                <SituationBasedStories />
              </ScrollView>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                <SituationBasedStories />
              </ScrollView>
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ShortStoriesModal;

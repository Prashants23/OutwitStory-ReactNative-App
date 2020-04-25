import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Stories from '../../WritingStory/Stories';
import Cards from './cards';
import CustomIcon from '../../../atoms/CustomIcon';
import Toolbars from '../../../atoms/Toolbar';
import {Height} from '../../../../utils/stylesheetawesomeproject';

const renderMostRead = StyleSheet.create({
  mostReadContainer: {
    alignItems: 'center',
    height: 'auto',
    // backgroundColor: 'white',
    width: '100%',
  },
  header: {
    height: 30,
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

class SituationBasedStories extends React.Component {
  constructor() {
    super();
    this.state = {
      AllStories: [],
    };
  }

  componentDidMount() {
    this.setState({AllStories: Stories});
  }

  renderMostRead() {
    const {AllStories} = this.state;
    return (
      <View style={{marginTop: 5,marginBottom:Height*0.26}}>
        {/* <Text style={styles.GenerHeader}> Most Read</Text> */}
        <View style={renderMostRead.mostReadContainer}>
          <FlatList
            keyExtractor={item => item.id}
            data={AllStories}
            // style={{height:300}}
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Cards
                // mainContainerStyle
                onpress={() => this.comments(item.id)}
                Title={item.title}
                Id={item.id}
                Authorname={item.Author}
                Story={item.story}
                Source={item.source}
                Read={item.Read}
              />
            )}
          />
          {/* <ScrollView>
                  {Stories1.map(user => (
                    <Cards
                      onpress={this.test}
                      Title={user.title}
                      Id={user.id}
                      Authorname={user.Author}
                      Story={user.story}
                    />
                  ))}
                </ScrollView> */}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View>{this.renderMostRead()}</View>
      </View>
    );
  }
}

export default SituationBasedStories;

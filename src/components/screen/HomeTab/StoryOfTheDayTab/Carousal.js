import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Carousal from 'react-native-snap-carousel';
import Stories from '../../WritingStory/Stories';
// import Cards from '../../HomeTab/StoryOfTheDayTab/cards'
class CarousalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      Stories1: [],
    };
  }

  componentDidMount() {
    this.setState({Stories1: Stories});
  }
  renderCarousalExample({Author, id}) {
    <View style={{backgroundcolor: 'black'}}>
      <Text style={{color: 'black'}}>{Author}</Text>
      <Text>{id}</Text>
    </View>;
  }
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.Stories1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Cards

            />
          )}
        />
      </View>
    );
  }
}

export default CarousalComponent;

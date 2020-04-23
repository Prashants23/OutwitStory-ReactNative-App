import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Toolbars from '../../atoms/Toolbar';
import {Height, Width} from '../../../utils/stylesheetawesomeproject';

const pagecontainer = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const ShortStories = StyleSheet.create({
  StoriesContainer: {
    height: Height * 0.10,
    width: Width * 0.64,
    backgroundColor: 'red',
    borderRadius: 15,
    elevation: 10,
  },
});

class Addnewstory extends React.Component {
  renderShortStories() {
    return (
      <View style={[ShortStories.StoriesContainer]}>
        <Text>ShortStories</Text>
      </View>
    );
  }

  renderBooks() {
    return (
      <View>
        <Text>Books</Text>
      </View>
    );
  }
  renderYourJournal() {
    return (
      <View>
        <Text style={{color: 'black'}}> Journal</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Toolbars />
        <View style={[pagecontainer.container]}>
          <View>
            <Text>Write Something New Today or continue Last.</Text>
            {this.renderShortStories()}
            {this.renderBooks()}
            {this.renderYourJournal()}
          </View>
        </View>
      </View>
    );
  }
}
export default Addnewstory;

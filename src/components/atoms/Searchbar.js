import {SearchBar} from 'react-native-elements';
import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Width, Height} from '../../utils/stylesheetawesomeproject';
import CustomIcon from './CustomIcon';
// import { Icon } from 'react-native-vector-icons/Icon';

const searchBarContainer = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    paddingLeft: 15,
    color: '#313636',
    height: 52,
    letterSpacing:1,
    width: Width * 0.8,
    fontSize:16
  },
  container: {
    borderRadius: 10,
    width: Width * 0.9,
    // backgroundColor: '#f5f7fa',
    backgroundColor:'#e1e6e6',
    // backgroundColor: '#dee3e3',

    flexDirection: 'row',
  },
  Icon: {
    paddingTop: 15,
    paddingLeft: 10,
  },
});

class SearchBox extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={searchBarContainer.mainContainer}>
        <View style={searchBarContainer.container}>
          <CustomIcon
            name="writer"
            size={20}
            color="#313636"
            style={searchBarContainer.Icon}
          />
          <TextInput
            style={searchBarContainer.textinput}
            placeholderTextColor="#747575"
            placeholder="Search"

            // onChangeText={this.UserNameUpdate}
          />
        </View>
      </View>
    );
  }
}

export default SearchBox;

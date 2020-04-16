import {SearchBar} from 'react-native-elements';
import React from 'react';

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
      <SearchBar
        round
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{
          backgroundColor: '#a3c6ff',
          // backgroundColor:"white",
          color: 'blue',
          borderColor: 'white',
          borderBottomColor: '#a3c6ff',
          borderRadius: 40,
          height: 60,
          width: 200,
        }}
        inputContainerStyle={{
          marginLeft: 20,
          marginTop: 10,
          borderRadius: 50,
          width: 200,
          // height:50,
          backgroundColor: '#fafafa',
        }}
        searchIcon={{color: 'black'}}
      />
    );
  }
}

export default SearchBox;

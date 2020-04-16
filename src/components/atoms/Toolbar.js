import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1f3454',
    height: 40,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  headerText: {
    color: 'white',
    // textAlign: 'center',
    textAlignVertical: 'center',
    height: 40,
    fontSize: 20,
    // marginLeft:20
  },
});

class Toolbars extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={[styles.headerText, {marginLeft: 20}]}>Outwit</Text>
        <Text style={[styles.headerText, {color: '#946715'}]}>Story</Text>
      </View>
    );
  }
}
export default Toolbars;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#1f3454',
    // backgroundColor:'#ebfaff',
    height: 40,
    flexDirection: 'row',
    marginTop:10
    // alignItems: 'center',
  },
  headerText: {
    // color: 'white',
    color:'#445e5e',
    // textAlign: 'center',
    textAlignVertical: 'center',
    height: 35,
    fontSize: 30,
    fontWeight:'700'
    // marginLeft:20
  },
});

class Toolbars extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header}>
        <Text style={[styles.headerText, {marginLeft: 20}]}>Outwit</Text>
        <Text style={[styles.headerText, {color: '#946715'}]}>Story</Text>
        </View>
      </View>
    );
  }
}
export default Toolbars;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

class Buttons extends React.Component {
  render() {
    const {onpress, styleme, title, textstyle} = this.props;
    return (
      <TouchableOpacity onPress={onpress} style={styleme}>
        <Text style={textstyle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Buttons;

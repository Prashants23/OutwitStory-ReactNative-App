import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';

class Buttons extends React.Component {
  render() {
    const {
      onpress,
      styleme,
      title,
      buttonIconSize,
      buttonIcon,
      textstyle,
      iconStyle,
    } = this.props;
    return (
      <TouchableOpacity onPress={onpress} style={styleme}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <CustomIcon
            style={iconStyle}
            name={buttonIcon}
            size={buttonIconSize}
            color={'black'}
          />
          <Text style={textstyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Buttons;

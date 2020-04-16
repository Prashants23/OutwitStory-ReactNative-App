import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import Buttons from '../atoms/buttons';

const styles = StyleSheet.create({
  inputstyle: {
    borderBottomWidth: 1,
  },
});

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onchange,
      onpressvisible,
      lablestate,
      buttontitle,
      displayinput,
      buttontextstyle,
      lable,
    } = this.props;
    return (
      <View>
        <Text>{lable}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 200, height: 40}}>
            {displayinput ? (
              <View>
                <Text>{lablestate}</Text>
              </View>
            ) : (
              <TextInput style={styles.inputstyle} onChangeText={onchange} />
            )}
          </View>
          <View
            style={{
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              marginLeft: 100,
              height: 30,
            }}>
            <Buttons
              title={buttontitle}
              backgroundcolor={''}
              borderradius={50}
              Margintop={0}
              textstyle={buttontextstyle}
              onpress={onpressvisible}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default ProfileDetails;

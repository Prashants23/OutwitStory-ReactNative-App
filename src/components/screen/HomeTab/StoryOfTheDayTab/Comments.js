import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CustomIcon from '../../../atoms/CustomIcon';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';

const styles = StyleSheet.create({
  commentHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    height: verticalScale(40),
    alignItems: 'center',
  },
  HeaderText: {
    textAlign: 'center',
    marginLeft: horizontalScale(120),
  },
});
class Comments extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.commentHeader}>
            <CustomIcon         
              size={25}
              name={'back'}
              style={{marginLeft: horizontalScale(10)}}
              onPress={() => Actions.Timeline()}
            />
            <Text style={styles.HeaderText}>Comments</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Comments;

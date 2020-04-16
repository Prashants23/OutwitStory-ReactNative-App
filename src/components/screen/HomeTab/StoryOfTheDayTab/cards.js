import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomIcon from '../../../atoms/CustomIcon';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';

const styles = StyleSheet.create({
  storiesContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  AuthorImageContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderColor: '#946715',
    borderWidth: 4,
    marginLeft: verticalScale(20),
    marginTop: 10,
    marginBottom: 5,
  },
  AuthorImage: {
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  AuthorName: {
    marginLeft: horizontalScale(10),
    height: verticalScale(35),
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginTop: verticalScale(10),
  },
  TextStyle: {
    color: '#a9d1c3',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      comments: 0,
      id: '',
      likedId: '',
    };
  }
  expandfunc = id => {
    this.setState({id: this.state.id === '' ? id : ''});
  };

  LikesUpdate = e => {
    this.setState({likes: this.state.likes + 1, likedId: e});
  };

  render() {
    const {likes, comments, id, likedId} = this.state;
    const {Title, onpress, Authorname, Story, Id} = this.props;
    return (
      <View style={styles.storiesContainer}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <View style={styles.AuthorImageContainer}>
            <Image
              style={styles.AuthorImage}
              source={require('../../../../assets/back34.jpg')}
            />
          </View>
          <View>
            <Text style={styles.AuthorName}>{Authorname}</Text>
          </View>
        </View>
        <View
          style={[
            id === Id
              ? {minWidth: '100%', height: 900}
              : {minWidth: '100%', height: 300},
            {backgroundColor: '#a8d7ed'},
          ]}>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <Text>{Title}</Text>
            <Text>{Story} </Text>
            <Text onPress={() => this.expandfunc(Id)}>TEst</Text>
          </View>
        </View>
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 20,
          }}>
          <CustomIcon
            color={'black'}
            size={20}
            name={'photo'}
            onPress={() => this.LikesUpdate(Id)}
          />
          <Text style={{marginHorizontal: horizontalScale(10)}}>
            {Id === likedId ? likes : null}
          </Text>
          <CustomIcon
            color={'black'}
            size={20}
            name={'photo'}
            onPress={onpress}
          />
          <Text style={{marginHorizontal: horizontalScale(5)}}>comments</Text>
        </View>
      </View>
    );
  }
}

export default Cards;

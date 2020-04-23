import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomIcon from '../../../atoms/CustomIcon';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';

const fontColor = 'black';
const styles = StyleSheet.create({
  storiesContainer: {
    // width: '100%',
    // backgroundColor: 'white',
    marginBottom: 20,
  },
  AuthorImageContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderColor: '#946715',
    borderWidth: 1,
    marginLeft: verticalScale(5),
    marginTop: 10,
    // marginBottom: 5,
    marginVertical: verticalScale(10),
  },
  AuthorImage: {
    height: 18,
    width: 18,
    borderRadius: 50,
  },
  AuthorName: {
    // marginLeft: horizontalScale(5),
    height: verticalScale(20),
    textAlignVertical: 'center',
    fontSize: 15,
    color: fontColor,
    // backgroundColor:'blue',
    // letterSpacing: 1,
    // lineHeight:1,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  TextStyle: {
    color: fontColor,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 1,
  },
  TitleOfTheStory: {
    marginBottom: 0,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: fontColor,
    marginTop: 10,
    width: 150,
  },
  StoryStyle: {
    paddingTop: 5,
    color: fontColor,
    fontSize: 14,
    letterSpacing: 0.5,
    // color:'black'
  },
  Description: {
    marginHorizontal: horizontalScale(8),
    width: 180,
  },
  readBy: {
    color: fontColor,
    fontSize: 14,
    lineHeight: 15,
    marginTop: 10,
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
    const {Title, onpress, Authorname, Story, Source, Read, Id} = this.props;
    return (
      <View style={styles.storiesContainer}>
        {/* <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <View style={styles.AuthorImageContainer}>
            <Image
              style={styles.AuthorImage}
              source={require('../../../../assets/background.jpg')}
            />
          </View>
          <View>
            <Text style={styles.AuthorName}>{Authorname}</Text>
          </View>
        </View> */}
        {/* <View
          style={[
            id === Id
              ? {minWidth: '100%', height: 400}
              : {minWidth: 300, height: 150},
            // {borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#946715'},
            // {backgroundColor: '#a8d7ed'},
          ]}> */}
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            width: 320,
            marginTop: 6,
            flexDirection: 'row',
          }}>
          <View
            style={{
              // width: 122,
              // height: 163,
              // marginVertical: 5,
              // borderRadius: 8,
              // borderColor: '#946715',
              // borderWidth: 1,
            }}>
            <Image
              style={{
                width: 120,
                height: 160,
                // marginVertical: 5,
                borderRadius: 8,
              }}
              source={Source}
            />
          </View>
          <View>
            <View style={styles.Description}>
              <Text style={styles.TitleOfTheStory}>{Title}</Text>
              <Text style={styles.AuthorName}>{Authorname}</Text>
              <Text style={styles.StoryStyle} numberOfLines={3}>
                {Story}
              </Text>
              <Text style={styles.readBy}>Read by: {Read}</Text>
            </View>
          </View>
          {/* <Text style={styles.TitleOfTheStory}>{Title}</Text>
            <Text style={styles.StorySyle}>{Story} </Text> */}
          {/* <Text onPress={() => this.expandfunc(Id)}>TEst</Text> */}
        </View>
        {/* </View> */}
        {/* <View
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
        </View> */}
      </View>
    );
  }
}

export default Cards;

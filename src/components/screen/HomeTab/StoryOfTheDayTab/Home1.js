import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Modal,
} from 'react-native';
import {
  verticalScale,
  horizontalScale,
} from '../../../../utils/stylesheetawesomeproject';
import Stories from '../../WritingStory/Stories';
// import CustomIcon from '../../atoms/CustomIcon';
import Cards from './cards';
import {Actions} from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Stories1: [],
      expand: false,
      id: '',
      ifcommentModal: false,
      commentId: '',
    };
  }
  componentDidMount() {
    this.setState({Stories1: Stories});
  }
  comments = event => {
    this.setState({
      ifcommentModal: !this.state.ifcommentModal,
      commentId: event,
    });
    console.log(this.state.ifcommentModal);
  };

  renderAllPosts() {
    const {Stories1, ifcommentModal, commentId} = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            height: 'auto',
            backgroundColor: 'white',
            width: '100%',
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={Stories1}
            renderItem={({item}) => (
              <Cards
                onpress={() => this.comments(item.id)}
                Title={item.title}
                Id={item.id}
                Authorname={item.Author}
                Story={item.story}
              />
            )}
          />
          {/* <ScrollView>
                {Stories1.map(user => (
                  <Cards
                    onpress={this.test}
                    Title={user.title}
                    Id={user.id}
                    Authorname={user.Author}
                    Story={user.story}
                  />
                ))}
              </ScrollView> */}
        </View>
      </View>
    );
  }
  render() {
    const {Stories1, ifcommentModal, commentId} = this.state;
    const filteredComments = Stories1.filter(user =>
      user.id === commentId ? user.comments : null,
    );
    // console.log(filteredComments);
    return (
      <View>
        <ImageBackground
          source={require('../../../../assets/back12.jpg')}
          style={{width: '100%', height: '100%'}}
          blurRadius={1}>
          {this.renderAllPosts()}
        </ImageBackground>
        <Modal
          animationType="slide"
          transparent={false}
          visible={ifcommentModal}>
          <Text onPress={this.comments}>Hii</Text>
          {filteredComments.map(comments => (
            <Text>{comments.comments}</Text>
          ))}
        </Modal>
      </View>
    );
  }
}
export default Home;

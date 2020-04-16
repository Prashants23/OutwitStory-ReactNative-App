import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import React from 'react';
import CustomIcon from '../../atoms/CustomIcon';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import Stories from './Stories';
import {ScrollView} from 'react-native-gesture-handler';
import Buttons from '../../atoms/buttons';
import {verticalScale} from '../../../utils/stylesheetawesomeproject';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 50,
    opacity: 0.8,
    // justifyContent:"center"
  },
  iconholder: {
    backgroundColor: 'black',
    width: 50,
  },
  storyholder: {
    width: 300,
    height: 200,
    // backgroundColor: 'black',
    justifyContent: 'center',
    marginLeft: 55,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 2,
    backgroundColor: 'black',
  },
  Authorname: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  footerButtonsContainer: {
    backgroundColor: 'black',
    height: 200,
  },
  buttons: {
    color: 'black',
    width: 200,
  },
});

class StoryOfTheDay extends React.Component {
  constructor() {
    super();
    this.state = {
      Items: [],
      backsource: '',
    };
  }
  componentDidMount() {
    const x = Stories.sort(function(a, b) {
      return parseFloat(b.Date) - parseFloat(a.Date);
    });
    this.setState({Items: x});
    //here You can use api to fetch data from backend or any api
  }

  onClickAction = () => {
    Actions.pop();
    console.log('I am with home');
  };
  renderStoryContainer(Item) {
    var today = new Date(),
      date =
        '0' +
        today.getDate() +
        '/' +
        '0' +
        (today.getMonth() + 1) +
        '/' +
        today.getFullYear();
    console.log(date);
    let sourc = Item.source;
    console.log('source', sourc.toString());
    // let url = require(`${sourc}`);

    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 10}}>
          {Item.Date == date ? 'Today' : Item.Date}
        </Text>
        <View style={styles.storyholder}>
          <ImageBackground
            //   source={require('../../../assets/background.jpg')}

            source={sourc}
            style={{width: 280, marginLeft: 8, height: 190}}
            blurRadius={2}>
            {/* <View style={styles.storyholder}> */}
            <Text style={styles.Title}>{Item.title}</Text>
            <Text style={styles.Authorname}>{Item.Author}</Text>
            {/* </View> */}
          </ImageBackground>
        </View>
      </View>
    );
  }

  render() {
    const {Items} = this.state;

    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onClickAction}>
            <View style={styles.iconholder}>
              <View style={{marginTop: 8, marginLeft: 10}}>
                <CustomIcon color={'white'} size={35} name={'back'} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', marginLeft: 100}}>
            <Text style={{color: 'white'}}>Story of the day</Text>
          </View>
        </View>
        <View>
          <View style={{height: 500}}>
            <ScrollView>
              <View style={{justifyContent: 'center'}}>
                {Items.map(Item => (
                  <View>{this.renderStoryContainer(Item)}</View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={styles.footerButtonsContainer}>
            <Buttons style={styles.buttons} />
          </View>
        </View>
      </View>
    );
  }
}

export default StoryOfTheDay;

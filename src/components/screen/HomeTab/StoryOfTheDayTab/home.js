import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Toolbars from '../../../atoms/Toolbar';

const styles = StyleSheet.create({
  Homecontainer2: {
    // backgroundColor: '#242B54',
    width: '100%',
    height: '100%',
    // borderBottomRightRadius:75,
    //     borderBottomLeftRadius:75,
    backgroundColor: 'black',
  },
  authorname: {
    width: 190,
    marginTop: 40,
    marginLeft: 20,
  },

  Imageprofile: {
    height: 58,
    marginTop: 0,
    marginLeft: 0,
    width: 58,
    // color:'white'
    // borderColor:"white"
    backgroundColor: 'white',
    borderRadius: 50,
  },
  profileimagecontainer: {
    height: 60,
    marginTop: 20,
    marginLeft: 100,
    width: 60,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
  },
  Homecontainer3: {
    // marginTop:30,
    // backgroundColor: "#def7ff",
    height: '100%',
  },
  Homecontainer4: {
    marginTop: 30,
    backgroundColor: '#4b5696',
    // backgroundColor:"#DBDBDB",
    // backgroundColor:"#B2B2B2",
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // marginTop: 10,

    //////
    borderColor: 'transparent', // Required to show shadows on Android for some reason !?!?
    shadowColor: 'black',
    shadowOffset: {
      width: 40,
      height: -25,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    // borderTopColor:"black",
    elevation: 25,
  },
  cards: {
    // justifyContent: 'center',
    backgroundColor: '#474747',
    borderWidth: 1,
    width: 150,
    height: 220,
    marginLeft: 34,
    // marginTop:15,
    borderRadius: 20,
    marginTop: 19,

    ///////
    borderColor: 'transparent', // Required to show shadows on Android for some reason !?!?
    shadowColor: 'blue',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // borderTopColor:"black",
    elevation: 10,
  },
  quoteOfTheDay: {
    width: 360,
    // backgroundColor: '#a5add9',
    backgroundColor: '#474747',
    height: 170,
    marginLeft: 25,
    marginTop: 30,
    borderRadius: 8,
    // justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: '#2D2522',

    shadowColor: 'blue',
    shadowOffset: {
      width: 20,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // borderTopColor:"black",
    elevation: 8,
  },
});

class Home extends React.Component {
  render() {
    return (
      // <View style={styles.Homecontainer}>
      <View style={styles.Homecontainer2}>
        <Toolbars />
        {/* <ImageBackground
          source={require('../../../assets/back7.jpg')}
          style={{width: '100%', height: '100%', position: 'absolute'}}
          blurRadius={1}> */}
        <View style={styles.Homecontainer3}>
          {/* <Text
              style={{
                textAlign: 'center',
                color: 'white',
                marginTop: 20,
                fontSize:20
              }}>
              Home
            </Text> */}

          {/* <View
              style={{
                flexDirection: 'row',
                borderRadius: 20,
              }}>
              <View style={styles.authorname}>
                <Text style={{color: 'white', fontSize: 20}}>Hi Prashant</Text>
              </View>
              <View style={styles.profileimagecontainer}>
                <Image
                  style={styles.Imageprofile}
                  source={require('../../../assets/img.png')}
                />
              </View>
            </View> */}
          <View>
            {/* <Image style={{backgroundColor:"white"}} source={require("../../../assets/logoout.png")}></Image> */}
            <Text
              style={{
                color: '#edfcf3',
                // color: '#242B54',
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 20,
                fontSize: 20,
              }}>
              OutwitStory
            </Text>
          </View>
          <View style={styles.Homecontainer4}>
            {/* <LinearGradient
              startPoint={{x: 0.0, y: 0.25}}
              endPoint={{x: 0.5, y: 1.0}}
              locations={[0, 0.6]}
              // colors={['#aab3e6','#005aa7']}
              // colors={['#005aa7', '#195A79']}
              colors={['#404040', '#1a1818']}
              style={{width: '100%', height: '100%', position: 'absolute'}}> */}
            <TouchableOpacity onPress={() => Actions.push('storyoftheday')}>
              <View style={styles.quoteOfTheDay}>
                {/* <ImageBackground
                source={require('../../../assets/back7.jpg')}
                style={{
                  width: 340,
                  marginLeft: 10,
                  height: 150,
                  borderRadius: 20,
                }}
                blurRadius={1}> */}
                <View style={{width: 150, marginTop: 10}}>
                  <View
                    style={{
                      marginLeft: 10,
                      width: 200,
                      borderLeftWidth: 2,
                      borderRightWidth: 2,
                      borderColor: '#242854',
                    }}>
                    <Text
                      style={{
                        // color: 'black',
                        color: '#f5f6ff',
                        fontWeight: '700',
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 5,
                        //  / marginLeft:10,
                        // textAlign: 'center',
                      }}>
                      OUTWIT
                    </Text>
                    <Text
                      style={{
                        // color: 'black',
                        color: '#f5f6ff',
                        fontWeight: '700',
                        textAlign: 'center',
                        fontSize: 20,
                        // marginTop: 5,
                        //  / marginLeft:10,

                        // textAlign: 'center',
                      }}>
                      story of the day
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: '#005aa7',
                      // borderWidth: 2,
                      // borderColor: 'white',
                      backgroundColor: '#2e2c2c',
                      marginTop: 30,
                      width: 290,
                      height: 70,
                      borderTopRightRadius: 12,
                      borderBottomLeftRadius: 8,
                      borderRadius: 8,
                      // borderColor: '#242854',
                      // borderTopColor:"#242854",
                      // borderRightColor:''
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '700',
                        // textAlign: 'center',
                        fontSize: 19,
                        marginTop: 5,
                        marginLeft: 5,
                      }}>
                      The widow of this realm
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        textAlign: 'center',
                        fontSize: 15,
                        marginTop: 5,
                      }}>
                      - Author name
                    </Text>
                  </View>
                </View>
                <View style={{marginLeft: 59}}>
                  <Image
                    style={{
                      width: 134,
                      height: 100,

                      marginTop: 30,
                    }}
                    source={require('../../../assets/quoteod.png')}
                  />
                </View>

                {/* </ImageBackground> */}
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#7bbce3',
                marginTop: 20,
                marginLeft: 20,
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: 200,
                paddingBottom: 5,
              }}>
              View More
            </Text>
            {/* <Text style={{textAlign: 'center', marginTop: 10}} /> */}
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.cards, {backgroundColor: '#474747'}]}>
                {/* <Text>Quote of the day</Text> */}
                <Text
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 15,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Quote of the day
                </Text>
                {/* <Image
                    source={require('../../../assets/quot.png')}
                    blurRadius={0.19}
                  /> */}
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 65,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Quotes first 2 words
                </Text>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 15,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Author Name
                </Text>
              </View>

              <View style={[styles.cards, {backgroundColor: '#474747'}]}>
                <Text
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 15,
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Todays quote Chalenge
                </Text>
                <Image
                  source={require('../../../assets/cha.png')}
                  blurRadius={0.19}
                />
              </View>
            </View>
            {/* </View> */}
            {/*<View style={{flexDirection: 'row'}}>
                <View style={[styles.cards, {backgroundColor: '#597C80'}]}>
                  <Text>Quote of the day</Text>
                </View>
                <View style={[styles.cards, {backgroundColor: '#DDD7FF'}]}>
                  <Text>Quote of the day</Text>
                </View>
          </View> */}
            {/* </LinearGradient> */}
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>

      // </View>
    );
  }
}
// import SearchBar from "../../atoms/Searchbar";
export default Home;

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Loginform from '../components/screen/loginSignUpForms/loginForm';
import Signupform from '../components/screen/loginSignUpForms/signupform';
import Startpage from '../components/screen/Startpage.js/startpage';
import Home from '../components/screen/HomeTab/StoryOfTheDayTab/Home1';
import Addnewstory from '../components/screen/AddNewStoryTab/Addnewstory';
// import Profile from '../components/screen/Home/Profile1';
import CustomIcon from '../components/atoms/CustomIcon';
// import StoryOfTheDay from '../components/screen/WritingStory/StoryofTheDay';
// import Test from '../components/screen/Home/SlidesHome';
import ChallengOfTheDay from '../components/screen/HomeTab/challengeOfTheDay/challengeOfTheDay';
import Participate from '../components/screen/HomeTab/challengeOfTheDay/ChalengeParticipate';
// import Toolbars from '../components/atoms/Toolbar';
import Comments from '../components/screen/HomeTab/StoryOfTheDayTab/Comments';
import ProfilePageContainers from '../components/screen/ProfilePageTab/ProfileContainer';
import ModalExample from '../components/screen/HomeTab/modalComment';
// import Form from '../components/screen/Form'

const styles = StyleSheet.create({
  tabcontainer: {
    backgroundColor: '#1f3454',
    borderColor: 'transparent', // Required to show shadows on Android for some reason !?!?
    shadowColor: 'black',
    shadowOffset: {
      width: 50,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    borderTopColor: 'black',
    elevation: 25,
    height: 42,
  },
  innerTabContainerHome: {
    backgroundColor: '#1f3454',
    height: 40,
    top: 0,
  },
});

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }
  tabicon = ({focused, title}) => {
    return (
      <View style={{alignItems: 'center'}}>
        {title === 'ChallengeOfTheDay' ? (
          <Text style={{color: 'white', width: 150}}>Challenge of the day</Text>
        ) : title === 'Storyoftheday' ? (
          <Text style={{color: 'white', width: 150}}>Story of the day</Text>
        ) : (
          <CustomIcon
            color={focused ? '#946715' : '#8a8787'}
            size={20}
            name={title}
          />
        )}
      </View>
    );
  };

  title = ({title}) => {
    return <Text style={{backgroundColor: 'green'}}>{title}</Text>;
  };

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="startpage"
            component={Startpage}
            hideNavBar={true}
            initial
          />
          <Scene
            key="login"
            component={Loginform}
            title="Login"
            hideNavBar={true}
          />
          <Scene
            key="register"
            // initial
            component={Signupform}
            title="SignUp"
            hideNavBar={true}
          />
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* Tabs Start Here */}
          <Scene
            // initial
            key="tabbar"
            tabs={true}
            showLabel={false}
            tabBarStyle={styles.tabcontainer}
            hideNavBar={true}>
            {/* Home Tab */}
            <Scene
              key="first"
              title="home3"
              showLabel={false}
              icon={this.tabicon}>
              {/* tab of Home  starts here Homse tabs  */}
              <Scene
                // initial
                key="homeTabOptions"
                tabs={true}
                showLabel={false}
                tabBarStyle={styles.innerTabContainerHome}
                tabBarPosition={'top'}
                showIcon
                hideNavBar={true}>
                {/* tab 1 Story of the day */}
                <Scene
                  key="Storyoftheday"
                  title="Storyoftheday"
                  icon={this.tabicon}>
                  <Scene
                    // initial
                    key="Timeline"
                    component={Home}
                    showLabel={false}
                    hideNavBar={true}
                    title="All content"
                  />
                  {/* <Scene
                    key="Comments"
                    component={Comments}
                    showLabel={false}
                    hideNavBar={true}
                    title="Comments"
                  /> */}
                </Scene>
                {/* <Scene
                key="Home"
                component={Home}
                showLabel={false}
                hideNavBar={true}
                title="All content"
              />
              <Scene
                key="storyoftheday"
                title="Story of The Day"
                component={StoryOfTheDay}
                showLabel={true}
                hideNavBar={true}
              /> */}

                {/* Tab 2 Challenge of the Day */}
                <Scene
                  key="ChallengeOfTheDay"
                  title="ChallengeOfTheDay"
                  tabBarStyle={{marginLeft: 40}}
                  icon={this.tabicon}>
                  <Scene
                    style={{backgroundColor: 'blue'}}
                    key="ChallengeOfTheDayfile"
                    hideNavBar={true}
                    component={ChallengOfTheDay}
                    showLabel={false}
                    title="ChallengeOfTheDayfile"
                  />
                  <Scene
                    key="Participate"
                    hideNavBar={true}
                    component={Participate}
                    title={'Participate'}
                  />
                </Scene>
                {/* <Scene
                  key="Test233"
                  title="test"
                  icon={this.tabicon}
                  hideNavBar>
                  <Scene Key="Test" component={Test} initial />
                </Scene> */}
              </Scene>
            </Scene>

            {/* Home Tab Ends Here */}

            {/* Add New Story Starts Here Second Tab */}
            <Scene
              key="Addnewstory"
              title="pencil"
              tabBarStyle={{marginLeft: 40}}
              showLabel={false}
              icon={this.tabicon}>
              <Scene
                style={{backgroundColor: 'blue'}}
                key="Addnewstoryfile"
                hideNavBar={true}
                component={Addnewstory}
                showLabel={false}
                title="My Stories"
              />
            </Scene>
            {/* Add New Story Ends Here */}

            {/* Profile PAge Tab Starts Here */}

            <Scene
              key="Profile"
              title="user"
              showLabel={false}
              icon={this.tabicon}>
              <Scene
                key="ProfilePageContainer"
                component={ProfilePageContainers}
                hideNavBar={true}
                showLabel={false}
                title="Profile"
              />
            </Scene>
            {/* Profile Page Tab Ends Here */}
          </Scene>
          {/* </Scene> */}
          {/* </View> */}
        </Stack>
      </Router>
    );
  }
}

export default Navigation;

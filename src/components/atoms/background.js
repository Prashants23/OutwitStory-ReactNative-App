import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
// import LoginForm from '../screen/loginForm'
// import Signup from '../screen/signupform';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECF1FF",
        height: 700
    }
});
class Background extends Component {
    render() {
        return (<View style={styles.container}>

            {/* <LoginForm /> */}
            {/* <Signup/> */}
            {/* <Text>test</Text> */}

        </View>)
    }
}

export default Background;
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
// import LoginForm from './src/components/loginForm';
// import Background from './src/components/background'
// import LoginForm from './src/components/screen/loginForm';
import Navigation  from "./src/navigation/index";
// import Startpage from './src/components/screen/Startpage.js/startpage';
// import LoginForm from './src/components/screen/loginForm';




const styles=StyleSheet.create({
container: {
  backgroundColor:'cyan',
  borderWidth:1,
  borderColor:'blue',
  margin:10,
  padding:10,
  textAlign:"center"
},
});
class App extends React.Component {
 constructor(){
   super()
   this.state={
     view:false,
     title:"show"
   }
 }
show=()=>{
  this.setState({view:true, title:"Hide"});
  
}
hide=()=>{
  this.setState({view:false,title:"show"})
}

  render() {
    return (
    <View style={{ flex: 1 }}>
     {/* <Startpage/> */}
     <Navigation/>
     {/* <LoginForm/> */}
     
      {/* <Button onPress={this.state.title==="show"?this.show:this.hide}
        title={this.state.title} />
        {this.state.view?
        <View ><Text style={styles.container}>Hello!</Text></View>:null
        } */}
    </View>)
  }
}
export default App;
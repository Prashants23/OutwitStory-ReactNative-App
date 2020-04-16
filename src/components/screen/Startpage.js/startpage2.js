import React from 'react'
import {Text,View,StyleSheet,Image, ColorPropType, ImageBackground} from 'react-native'
import { Dimensions } from "react-native";
import Buttons from "../../atoms/buttons"
import { verticalScale, horizontalScale } from "../../../utils/stylesheetawesomeproject";
import LinearGradient from 'react-native-linear-gradient';

const styles=StyleSheet.create({
    card:{
        marginTop:70,
        // marginBottom:20,
        // alignItems:"center",
        // backgroundColor:"#F6F6F8",
        width:"50%",
        height:"50%",
        shadowColor:"white"
    },
    welcometext:{
        // marginTop:30,
       fontSize:40,
       fontWeight:"700",
       color:"black",
    //    textAlign:"center",
       marginTop:10
    },
    buttoncontainer:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom:10,
        // width:180,
        alignItems:'center',
        marginBottom:verticalScale(50),
        // borderRadius:20
    },
   loginButton:{
       width:290,
       paddingTop:15,
       paddingBottom:15,
       paddingLeft:30,
       paddingRight:30,
       backgroundColor:"black",
    //    color:"#FFDC7C",
    color:"white",
       fontSize:20,
       fontWeight:"700",
       borderRadius:10,
       borderWidth:2,
       borderBottomColor:"#2193b0"

   },
   TextStyle: {
    color: "#FFDC7C",
    fontSize: 17    ,
    fontWeight: "700",
    
    
    // fontStyle:'italic',
},
test:{
    width:"100%",
    height:"64%",
    backgroundColor:"#DA674A",
    borderBottomLeftRadius:120,
    borderBottomRightRadius:120,
    // borderBottomEndRadius:300
},
typewriter:{
    // flex:1,
    width:400,
    height:240,
    // flexDirection:"column",
    // justifyContent:"flex-end",
    marginTop:200,
    marginLeft:80,

}
});


class Startpage2 extends React.Component{
    render(){
        return(
    <View  style={{width: '100%', height: '100%',backgroundColor:"white"}} >
         <Text style={styles.welcometext}>OUTWIT</Text>
        <View><Text style={{color:"black",fontSize:60}}>Once upon a time...</Text></View>        
        <ImageBackground 
        source={require("../../../assets/typerwriter.png")}
         style={styles.typewriter} 
          blurRadius={0}>
        </ImageBackground>
           
           
            
            
            
        </View>)
    }
}
export default Startpage2;
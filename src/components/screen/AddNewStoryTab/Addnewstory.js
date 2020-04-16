import React from 'react';
import {Text, View} from 'react-native';
import Toolbars from '../../atoms/Toolbar';

class Addnewstory extends React.Component {
  render() {
    return (
      <View>
        <Toolbars />
       <View>
           <View>
               <Text>Hi Author Name</Text>
           </View>
       </View>
      </View> 

    );
  }
}
export default Addnewstory;

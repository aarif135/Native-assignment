import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button,StatusBar,TextInput } from "react-native";
import { withNavigation } from 'react-navigation';


class Circle extends Component {


  render() {
    return (
      <View style={styles.container}>
            <StatusBar  
                    backgroundColor = "white"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
                <View style={{padding:10 }}>
         
          <TextInput  placeholderTextColor='black' placeholder='ENTER CIRCLE NAME' style={{borderWidth:2, borderColor:'grey',textAlign:'center'}} />
          <Button title='add circle' color='#4934eb'/>
          </View>
      </View>
    );
  }
}
export default withNavigation(Circle) 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

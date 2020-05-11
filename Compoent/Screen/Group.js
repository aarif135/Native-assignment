import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button,StatusBar,TextInput } from "react-native";


class Group extends Component {


  render() {
    return (
      <View style={styles.container}>
            <StatusBar  
                    backgroundColor = "white"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
                <Text>Groups</Text>
      </View>
    );
  }
}
export default Group
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

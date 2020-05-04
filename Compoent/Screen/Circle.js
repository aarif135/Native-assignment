import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button,StatusBar } from "react-native";
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
          <Text style={{ color: "black" }}> LOGIN WITH FACEBOOK</Text>
      </View>
    );
  }
}
export default withNavigation(Circle) 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

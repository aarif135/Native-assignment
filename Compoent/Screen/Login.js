import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button,StatusBar} from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

import Logo from "../../assets/map.png";

import FaceBookLogin from "../Screen/Api";

class Login extends Component {
  faceBookLogin = async () => {
    await FaceBookLogin();
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.container}>
          <StatusBar  
                    backgroundColor = "white"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
        <Image source={Logo} style={{ height: 150, width: 150 }} />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>TRACK BUDDY</Text>

        <TouchableOpacity
          onPress={this.faceBookLogin}
          style={{ backgroundColor: "lightgreen", padding: 10 }}
        >
          <Text style={{ color: "black" }}> LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

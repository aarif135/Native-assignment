import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ViewComponent,
  Button,
  Image,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Compoent/Screen/Login";
import Home from "./Compoent/Screen/Home";
import Circle from './Compoent/Screen/Circle.js'
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: null,
              headerRight: () => (
                <View>
                  <Button onPress={()=>{
                 this.props.navigation.navigate("circle")
                  }}  title="profile"  />
                  

                </View>
              ),
              headerStyle: {
                backgroundColor: "lightgreen",
            
              },
            }}
          />
          <Stack.Screen Component={Circle} name='circle'/>
        </Stack.Navigator>
            
      </NavigationContainer>
    );
  }
}

import React, { Component } from 'react';
import { StyleSheet, Text, ViewComponent,Button,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Compoent/Screen/Login'
import Home from './Compoent/Screen/Home'

const Stack = createStackNavigator();



export default class App extends Component{

  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>

      <Stack.Screen name="Login" component={Login} 
     
      
      />
    <Stack.Screen name="Home" component={Home} 
     options={{headerLeft:null}}
    
    />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
  }
}


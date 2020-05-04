import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ViewComponent,
  Button,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import { HeaderButtons, HeaderButton, Item,HiddenItem } from 'react-navigation-header-buttons';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign} from '@expo/vector-icons';



import Login from "./Compoent/Screen/Login";
import Home from "./Compoent/Screen/Home";
import Circle from './Compoent/Screen/Circle'
const Stack = createStackNavigator();
const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={AntDesign} iconSize={30} color="black" />
);

function App (){
  
  const ref = React.useRef(null);



      
    return (
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Login"
        
        >
          <Stack.Screen name="Login" component={Login} options={{ headerStyle:{
            backgroundColor:'lightgreen'
          }}} />
          <Stack.Screen
            name="Home"
            component={Home}
            

            options={{
              headerLeft: null,
              headerRight: ( navigate,navigation )=> (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item title="search" iconName="adduser" onPress={() => ref.current && ref.current.navigate('CreateCircle')} />
      <Item title="select" iconName="user" onPress={() => alert('select')} />
    </HeaderButtons>

              ),
              headerStyle: {
                backgroundColor: "lightgreen",
            
              },
            }}
          />
           <Stack.Screen name="CreateCircle" component={Circle} 
           options={{ headerStyle:{
             backgroundColor:'lightgreen',
      
           }}}
           />
        </Stack.Navigator>
            
      </NavigationContainer>
    );
  
}
export default App
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ViewComponent,
  Button,
  Image,
  View,
  TouchableOpacity,
  YellowBox
} from "react-native";
import { HeaderButtons, HeaderButton, Item,HiddenItem } from 'react-navigation-header-buttons';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Ionicons } from '@expo/vector-icons';
import { AntDesign} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5} from '@expo/vector-icons';





import Login from "./Compoent/Screen/Login";
import Home from "./Compoent/Screen/Home";
import Circle from './Compoent/Screen/Circle'
import Group from './Compoent/Screen/Group'
import Profile from './Compoent/Screen/Profile'

import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const Tab = createMaterialBottomTabNavigator();
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
            component={MyTabs}
            

            options={{
              headerLeft: null,
              headerRight: ( navigate,navigation )=> (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item title="search" iconName="adduser" onPress={() => ref.current && ref.current.navigate('CreateCircle')} />
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
function MyTabs() {
  return (
    <Tab.Navigator barStyle={{backgroundColor:'lightgreen'}} >
      <Tab.Screen name="Home" component={Home}
       
      options={{
        tabBarLabel:null,
        tabBarIcon:()=><Ionicons name='md-home' size={30}/>
      }}
      
      />
      <Tab.Screen name="Group" component={Group}
      options={{
        tabBarLabel:null,

        tabBarIcon:()=><MaterialIcons name='group'
        
        size={30}
        />
      }}
      
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        
        tabBarLabel:null,

        tabBarIcon:()=><FontAwesome5 name='user' size={30}
      />
      }}
      />

    </Tab.Navigator>
  );
}
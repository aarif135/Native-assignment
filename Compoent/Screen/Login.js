  import React, { Component } from 'react'
  import {View,StyleSheet,Image,Text, Button} from 'react-native'
  import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

  import Logo from '../../assets/map.png'
  import Fb from '../../assets/fb.png'

  import * as firebase from "firebase/app";
  import "firebase/auth";
  import * as Facebook from 'expo-facebook';
  import FaceBookLogin from '../Screen/Api'


  
const firebaseConfig = {
  apiKey: "AIzaSyDOhOVs33wXSZ048R54crAxj_KnuSSKrFE",
  authDomain: "track-buddy-bbd90.firebaseapp.com",
  databaseURL: "https://track-buddy-bbd90.firebaseio.com",
  projectId: "track-buddy-bbd90",
  storageBucket: "track-buddy-bbd90.appspot.com",
  messagingSenderId: "29869395351",
  appId: "1:29869395351:web:fc915a56c841aa749888d2",
  measurementId: "G-KDGV26DDGZ"
}; 
 firebase.initializeApp(firebaseConfig)
 


class Login extends Component{
 
     async faceBookLogin(){
     const user=await FaceBookLogin()
      console.log(user)
      this.props.navigation.navigate('home')
      

      }
    
    render(){
        return(<View  style={styles.container}>
<Image source={Logo} style={{height:150,width:150}}/>
<Text style={{fontSize:25,fontWeight:'bold'}}>TRACK BUDDY</Text>

    
<TouchableOpacity onPress={this.faceBookLogin} style={{backgroundColor:'blue',padding:10}}>
  
    <Text style={{color:'white'}}> LOGIN WITH FACEBOOK</Text>
   

</TouchableOpacity>

        </View>)
    }

  }
  export default Login
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
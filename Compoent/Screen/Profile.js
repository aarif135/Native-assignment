import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";

import * as firebase from "firebase";
import "firebase/firestore";

class Profile extends Component {
  state = {
    data: [],
    email:'',
    mail:false
  };
  componentDidMount() {
    this.getMarker();
  }

  async getMarker() {
    let data = [];
    const snapshot = await firebase.firestore().collection("user").get();
    return snapshot.docs.map((doc) => {
      data.push(doc.data());
      console.log(data);
      this.setState({
        data,
      });
    });
  }
  update=(Text)=>{
    this.setState({
      email:Text
    })

  }
  renderEmail=()=>{
    alert("abc")
    this.setState({
      mail:true
    })
  }


  render() {
    const { data,email,mail } = this.state;
    console.log("data", data);

    return (
      <View >
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          hidden={false}
          translucent={true}
        />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{flex:2,alignItems:'center',justifyContent:'center',marginTop:20}}>
              <Image source={{uri:item.url}} style={{height:150,width:150,borderRadius: 400/ 2}}/>
              <Text style={{borderColor:'lightgrey', borderWidth:2,padding:6,fontSize:20}}>NAME:{item.name}</Text>
          {mail?<Text style={{borderColor:'lightgrey', borderWidth:2,padding:6,fontSize:20}}>{email}</Text>: <TextInput  style={{borderColor:'lightgrey', borderWidth:2,padding:6,fontSize:20}} placeholderTextColor='black' placeholder="input your email" onChangeText={this.update} value={email}/>}
             
            <Button onPress={this.renderEmail} title='update'/>
            </View>
          )}
        />
      </View>
    );
  }
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

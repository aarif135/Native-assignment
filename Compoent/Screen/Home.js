import React, { Component } from "react";

import MapView ,{Marker}from 'react-native-maps'
import * as Location from 'expo-location';


import { View,Text,Dimensions,StyleSheet, Button } from "react-native";



class Home extends Component {
    state={
        location:'',
        latitude:'',
        longitude:'',
        longitudeDelta:'',
        latitudeDelta:'' 
    }
    componentDidMount(){
      this.getLocation()

    }
    getLocation=async()=>{
        let { status } = await Location.requestPermissionsAsync();
        if(status=='granted'){
          Location.watchPositionAsync({timeInterval: 3000, distanceInterval: 0.2}, (location) => {
            const { coords: { latitude, longitude } } = location
            console.log('latitude, longitude--->')
            console.log(latitude, longitude)
            this.setState({
              longitude,
              latitude
              ,
              latitudeDelta: 0.008, longitudeDelta: 0.008,
              coordinates: {
                latitude, longitude, latitudeDelta: 0.008, longitudeDelta: 0.008
              }
            })
          });
        }

    }
  render() {

    const{coordinates,longitude,latitude,latitudeDelta,longitudeDelta}=this.state
    console.log(coordinates)
    const location={
      longitude,latitude,latitudeDelta,longitudeDelta
    }
     console.log("location==>",location)
    
    return <View style={styles.container}>
<MapView initialRegion={coordinates} style={styles.mapStyle}>
    <Marker coordinate={location}/>
  
</MapView>


    </View>;
  }
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
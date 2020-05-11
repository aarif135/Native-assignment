import * as Facebook from "expo-facebook";
import { AsyncStorage } from "react-native";

import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOhOVs33wXSZ048R54crAxj_KnuSSKrFE",
  authDomain: "track-buddy-bbd90.firebaseapp.com",
  databaseURL: "https://track-buddy-bbd90.firebaseio.com",
  projectId: "track-buddy-bbd90",
  storageBucket: "track-buddy-bbd90.appspot.com",
  messagingSenderId: "29869395351",
  appId: "1:29869395351:web:fc915a56c841aa749888d2",
  measurementId: "G-KDGV26DDGZ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

async function logIn() {
  try {
    await Facebook.initializeAsync("164467981566471");
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,picture.type(large)`
      );

      const user = await response.json();
      console.log("user===>", user);
      const {
        id,
        name,
        picture: {
          data: { url },
        },
      } = user;
      console.log(url);
      const data={
        name,
        url,
        id,

      }
      AsyncStorage.setItem('user',JSON.stringify(data))
      firebase.firestore().collection("user").doc(id).set({
        name,
        url,
        id,
      });
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
export default logIn;

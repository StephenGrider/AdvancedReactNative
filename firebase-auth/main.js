import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBpFizhxnivnP5qJ6WqLvZh62r26QAvwVY",
      authDomain: "one-time-password-c725a.firebaseapp.com",
      databaseURL: "https://one-time-password-c725a.firebaseio.com",
      storageBucket: "one-time-password-c725a.appspot.com",
      messagingSenderId: "961764633756"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);

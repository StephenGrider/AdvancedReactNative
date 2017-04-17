import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInForm />
        <SignUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

Exponent.registerRootComponent(App);

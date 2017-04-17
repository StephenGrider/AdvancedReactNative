import axios from 'axios';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from 'react-native-elements'

const ROOT_URL = 'https://t57mokqay8.execute-api.us-west-2.amazonaws.com/dev';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default class SignUpForm extends Component {
    state = { phone: '8056021004', email: 'ste.grider@gmail.com', error: '' };

    handleSubmit = () => {
      const { email, phone } = this.state;
      console.log({ phone, email });
      axios.post(`${ROOT_URL}/users`, { phone, email, countryCode: 1 })
        .then(() => this.setState({ phone: '', email: '', error: '' }))
        .catch(res => this.setState({ error: res.response.data.error }));
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.formWrapper}>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              keyboardType="phone-pad"
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </View>
          <View style={styles.formWrapper}>
            <FormLabel>Email Address</FormLabel>
            <FormInput
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  formWrapper: {
    marginBottom: 20
  }
});

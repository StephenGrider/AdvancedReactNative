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

const ROOT_URL = 'https://t57mokqay8.execute-api.us-west-2.amazonaws.com/dev/';

export default class SignInForm extends Component {
    state = { phone: '', code: '', token: '', error: '' };

    handleGetCode = () => {
      this.setState({ error: '' });
      axios.post(`${ROOT_URL}/users/send`, { phone: this.state.phone })
        .catch(res => this.setState({ error: res.response.data.error }));
    }

    handleSubmitCode = () => {
      this.setState({ error: '' });
      const { phone, code } = this.state;
      axios.post(`${ROOT_URL}/users/verify`, { code, phone })
        .then(res => this.setState({ token: res.data.token }))
        .catch(res => this.setState({ error: res.response.data.error }));
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Get a Code</Text>
          <View style={styles.formWrapper}>
            <FormLabel>Phone Number</FormLabel>
            <FormInput
              value={this.state.phone}
              keyboardType="phone-pad"
              onChangeText={phone => this.setState({ phone })}
            />
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
          <Button onPress={this.handleGetCode} title="Submit" />

          <Text>Submit a code</Text>
          <View style={styles.formWrapper}>
            <FormLabel>Code</FormLabel>
            <FormInput
              keyboardType="phone-pad"
              onChangeText={code => this.setState({ code })}
            />
            <FormValidationMessage>{this.state.error}</FormValidationMessage>
          </View>
          <Button onPress={this.handleSubmitCode} title="Submit" />
          <View>
            <Text>My Token: {this.state.token}</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  formWrapper: {
    marginBottom: 20
  }
});

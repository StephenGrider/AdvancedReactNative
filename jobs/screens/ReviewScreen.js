import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    header: () => {
      return {
        right: <Text>Go Right</Text>
      };
    }
  }

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;

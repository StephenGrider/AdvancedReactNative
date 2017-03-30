import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        
      </View>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);

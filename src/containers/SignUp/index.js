import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
      </View>
    );
  }
}

export default SignIn;

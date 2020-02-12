import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({});

const SignupScreen = ({ navigation }) => (
  <View>
    <Text style={{ fontSize: 48 }}>Signup Screen</Text>
    <Button
      title="Go to Signin"
      onPress={() => navigation.navigate('Signin')}
    />
    <Button
      title="Go to Main Flow"
      onPress={() => navigation.navigate('mainFlow')}
    />
  </View>
);

export default SignupScreen;

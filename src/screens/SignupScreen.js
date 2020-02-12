import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up For Tracker</Text>
    </Spacer>
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />
    <Spacer>
      <Button title="Sign up" />
    </Spacer>
  </View>
);

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;

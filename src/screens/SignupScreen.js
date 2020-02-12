import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const styles = StyleSheet.create({});

const SignupScreen = ({ navigation }) => (
  <>
    <Spacer>
      <Text h3>Sign Up For Tracker</Text>
    </Spacer>
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />
    <Spacer>
      <Button title="Sign up" />
    </Spacer>
  </>
);

export default SignupScreen;

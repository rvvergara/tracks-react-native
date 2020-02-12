import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as ErrorContext } from '../context/ErrorContext';
import { signup } from '../thunks/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch: signupDispatch } = useContext(AuthContext);


  const { state: errorState, dispatch: errorDispatch } = useContext(ErrorContext);

  const handleSignup = async () => {
    const res = await signup(signupDispatch, errorDispatch, { email, password });
    if (res) {
      navigation.navigate('mainFlow');
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        errorMessage={errorState}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button
          title="Sign up"
          onPress={handleSignup}
        />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;

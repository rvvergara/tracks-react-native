import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as ErrorContext } from '../context/ErrorContext';
import { signin } from '../thunks/auth';
import { setError} from '../actions/error';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  error: {
    margin: 15,
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch: signinDispatch } = useContext(AuthContext);

  const { state: errorState, dispatch: errorDispatch } = useContext(ErrorContext);

  useEffect(() => () => {
    errorDispatch(setError(''));
  }, []);


  const handleSignin = async () => {
    const res = await signin(signinDispatch, errorDispatch, {email, password});

    if (res) {
      navigation.navigate('mainFlow');
    }
  };

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>
          Sign In To Your Account
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
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
      {errorState ? <Text style={styles.error}>{errorState}</Text> : null}
      <Spacer>
        <Button
          title="Sign in"
          onPress={handleSignin}
        />
      </Spacer>
    </View>
  );
};

export default SigninScreen;

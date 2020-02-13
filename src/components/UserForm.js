import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {withNavigation, NavigationEvents } from 'react-navigation';
import Spacer from './Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {Context as ErrorContext} from '../context/ErrorContext';
import {signup, signin} from '../thunks/auth';
import {setError} from '../actions/error';

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
  link: {
    color: 'blue',
  },
});

const UserForm = ({navigation}) => {
  const {routeName} = navigation.state;
  const linkText = routeName === 'Signup' ? 'Already have an account? Sign in instead' : "Don't have an account yet? Sign up instead";
  const titleText = routeName === 'Signup' ? 'Sign Up For Tracker' : 'Sign In To Your Account';
  const buttonText = routeName === 'Signup' ? 'Signup' : 'Signin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {dispatch: authDispatch} = useContext(AuthContext);

  const {state: errorState, dispatch: errorDispatch} = useContext(ErrorContext);

  const handleSubmit = async () => {
    const auth = routeName === 'Signup' ? signup : signin;
    const res = await auth(authDispatch, errorDispatch, {email, password});
    if (res) {
      navigation.navigate('mainFlow');
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    errorDispatch(setError(''));
  };

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearForm}
      />
      <Spacer>
        <Text h3>{titleText}</Text>
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
        <Button title={buttonText} onPress={handleSubmit} />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(routeName === 'Signup' ? 'Signin' : 'Signup')}>
          <Text style={styles.link}>
            { linkText }
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

UserForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(UserForm);

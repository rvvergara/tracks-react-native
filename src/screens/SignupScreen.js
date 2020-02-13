import React from 'react';
import UserForm from '../components/UserForm';

const SignupScreen = () => (
  <>
    <UserForm />
  </>
);

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;

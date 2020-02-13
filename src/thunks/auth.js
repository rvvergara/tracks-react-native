import AsyncStorage from '@react-native-community/async-storage';
import trackerAPI from '../utils/tracker';
import {setAuthToken} from '../actions/auth';
import {setError} from '../actions/error';
import { navigate } from '../utils/navigationRef';

export const signup = async (signupDispatch, errorDispatch, signupParams) => {
  const path = '/signup';
  try {
    const res = await trackerAPI.post(path, signupParams);
    const {token} = await res.data;
    await signupDispatch(setAuthToken(token));
    await AsyncStorage.setItem('token', token);
    return token;
  } catch (err) {
    if (err.response.data.includes('email')) {
      errorDispatch(setError('Email is invalid or already taken'));
    }
    if (err.response.data.includes('password')) {
      errorDispatch(setError('Password invalid or is blank'));
    }
    return null;
  }
};

export const signin = async (signinDispatch, errorDispatch, signinParams) => {
  const path = '/signin';
  try {
    const res = await trackerAPI.post(path, signinParams);
    const {token} = await res.data;
    await signinDispatch(setAuthToken(token));
    await AsyncStorage.setItem('token', token);
    return token;
  } catch (err) {
    errorDispatch(setError('Invalid email or password'));
    return null;
  }
};

export const autoSignIn = async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    return navigate('mainFlow');
  }
  return navigate('loginFlow');
};

export const signout = async (dispatch) => {
  dispatch(setAuthToken(null));
  return navigate('loginFlow');
};

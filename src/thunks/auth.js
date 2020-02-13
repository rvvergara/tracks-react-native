import AsyncStorage from '@react-native-community/async-storage';
import trackerAPI from '../utils/tracker';
import {setAuthToken} from '../actions/auth';
import {setError} from '../actions/error';

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

export const signin = async (dispatch, signinParams) => {
  const path = '';
  try {
    // set current user data in context
  } catch (err) {
    console.log('ERROR', err);
    // set error in context
  }
};

export const signout = async (dispatch) => {
  // set user data in context
};

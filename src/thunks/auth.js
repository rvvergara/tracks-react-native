import trackerAPI from '../utils/tracker';
import { setAuthToken } from '../actions/auth';
import { setError } from '../actions/error';

export const signup = async (signupDispatch, errorDispatch, signupParams) => {
  const path = '/signup';
  try {
    const res = await trackerAPI.post(path, signupParams);
    const { token } = res.data;
    signupDispatch(setAuthToken(token));
    return token;
  } catch (err) {
    errorDispatch(setError(err.message));
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

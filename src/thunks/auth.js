import trackerAPI from '../utils/tracker';
import { setAuthToken } from '../actions/auth';

export const signup = async (dispatch, signupParams) => {
  const path = '/signup';
  try {
    const res = await trackerAPI.post(path, signupParams);
    const { token } = res.data;
    dispatch(setAuthToken(token));
    return token;
  } catch (err) {
    // set error data
    console.log('ERROR', err.response);
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

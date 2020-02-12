import createDataContext from './createDataContext';

const authReducer = (action, state) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(authReducer, { isSignedIn: false });

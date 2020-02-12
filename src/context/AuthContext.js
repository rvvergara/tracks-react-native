import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return { token: action.token };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(authReducer, { token: null });

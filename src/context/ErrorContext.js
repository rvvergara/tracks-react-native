import createDataContext from './createDataContext';

const errorReducer = (state, action) => {
  if (action.type === 'SET_ERROR') {
    return action.error;
  }
  return state;
};

export const { Context, Provider } = createDataContext(errorReducer, null);

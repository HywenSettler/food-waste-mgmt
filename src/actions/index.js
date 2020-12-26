import { LOG_IN, LOG_OUT } from '../actions/types';

export const logIn = (authData) => {
  return {
    type: LOG_IN,
    payload: authData
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

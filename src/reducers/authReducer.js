import { LOG_IN, LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: false,
  orgName: '',
  isNGO: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true, ...action.payload };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        orgName: '',
        isNGO: null
      };

    default:
      return state;
  }
};

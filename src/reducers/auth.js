import api from 'utils/api';
import { BACKEND_URL } from 'config/urls';

const LOGIN_SUCCESS = 'rmp/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'rmp/auth/LOGIN_FAILURE';
const LOG_OUT = 'rmp/auth/LOG_OUT';

const initialState = {
  isLoggedIn: false,
  logInInProgress: false,
  error: null,
};

export const loginSuccess = token => dispatch => {
  localStorage.setItem('token', token);

  dispatch({ type: LOGIN_SUCCESS });
};

export const logoutUser = () => async dispatch => {
  try {
    await api.post(`${BACKEND_URL}/auth/logout`);
  } finally {
    localStorage.clear();
    dispatch({ type: LOG_OUT });
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, logInInProgress: false };
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, logInInProgress: false, error: action.error };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;

import api from 'utils/api';
import BASE_URL from 'config/urls';

const LOGIN = 'rmp/auth/LOGIN';
const LOGIN_SUCCESS = 'rmp/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'rmp/auth/LOGIN_FAILURE';

const initialState = {
  isLoggedIn: false,
  logInInProgress: false,
  error: {},
};

export const loginUser = (service, userData) => async dispatch => {
  dispatch({ type: LOGIN });
  try {
    console.log(userData);
    localStorage.setItem('token', userData.accessToken);
    localStorage.setItem('service', service);

    await api.post(`${BASE_URL}/api/login`);

    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    localStorage.clear();

    dispatch({ type: LOGIN_FAILURE, error });
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, logInInProgress: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, logInInProgress: false };
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, logInInProgress: false, error: action.error };
    default:
      return state;
  }
};

export default userReducer;

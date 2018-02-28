const LOGIN = 'rmp/auth/LOGIN';
const LOGIN_SUCCESS = 'rmp/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'rmp/auth/LOGIN_FAILURE';
const LOG_OUT = 'rmp/auth/LOG_OUT';

const initialState = {
  isLoggedIn: false,
  logInInProgress: false,
  error: null,
};

export const loginStart = () => dispatch => {
  dispatch({ type: LOGIN });
};

export const loginSuccess = token => dispatch => {
  localStorage.setItem('token', token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const loginFail = error => dispatch => {
  dispatch({ type: LOGIN_FAILURE, error });
};

export const logOut = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOG_OUT });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, logInInProgress: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, logInInProgress: false };
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, logInInProgress: false, error: action.error };
    default:
      return state;
  }
};

export default userReducer;

import api from "utils/api";

const LOGIN_START = "rmp/users/LOGIN_START";
const LOGIN_SUCCESS = "rmp/users/LOGIN_SUCCESS";
const LOGIN_FAILURE = "rmp/users/LOGIN_FAILURE";

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false
};

export const loginUser = (service, userData) => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    localStorage.setItem("token", userData.accessToken);
    localStorage.setItem("service", service);

    await api.loginUser();

    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    localStorage.clear();
    dispatch({ type: LOGIN_FAILURE, message: error.message });
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, isLoggingIn: false };
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, isLoggingIn: false };
    default:
      return state;
  }
};

export default userReducer;

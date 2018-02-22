const EDIT_USER = 'rmp/users/EDIT_USER';
const EDIT_USER_SUCCESS = 'rmp/users/EDIT_USER_SUCCESS';
const EDIT_USER_FAIL = 'rmp/users/EDIT_USER_FAIL';

const emptyUserProfile = {
  fullName: '',
  nickname: '',
  avatar: '',
};

const initialState = {
  userProfile: emptyUserProfile,
  loading: false,
  error: null,
};

export const edit = user => dispatch => {
  return dispatch({ type: EDIT_USER_SUCCESS, user });
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

const initialState = {};

export const loginUser = (service, userData) => async dispatch => {
  console.log("lu", service, userData);
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

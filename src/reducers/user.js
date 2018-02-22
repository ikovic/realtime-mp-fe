const initialState = {};

export const loginUser = userData => async dispatch => {
  console.log('lu', userData);
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

import api from '../utils/api';
import { BACKEND_URL } from '../config/urls';

const PUT_LOBBIES = 'rmp/lobbies/PUT_LOBBIES';
const FETCH_ERROR = 'rmp/lobbies/FETCH_ERROR';

const initialState = {
  lobbies: [],
  error: null,
};

export const fetchLobbies = () => async dispatch => {
  try {
    const { data: lobbies } = await api.get(`${BACKEND_URL}/lobbies`);
    dispatch({
      type: PUT_LOBBIES,
      lobbies,
    });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error });
  }
};

const lobbiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LOBBIES:
      return { ...state, lobbies: action.lobbies };
    case FETCH_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default lobbiesReducer;

const PUT_LOBBIES = 'rmp/lobbies/PUT_LOBBIES';
const FETCH_ERROR = 'rmp/lobbies/FETCH_ERROR';

const initialState = {
  lobbies: [
    {
      id: 1,
      name: 'xtreme lobby',
      players: 0,
      maxPlayers: 5,
    },
    {
      id: 2,
      name: 'huge lobby',
      players: 2,
      maxPlayers: 120,
    },
    {
      id: 3,
      name: 'pls join my lobby',
      players: 1,
      maxPlayers: 5,
    },
    {
      id: 4,
      name: 'we r full',
      players: 7,
      maxPlayers: 7,
    },
  ],
  error: null,
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

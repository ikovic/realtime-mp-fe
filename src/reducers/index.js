import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import lobbies from './lobbies';

export default combineReducers({
  user,
  auth,
  lobbies,
});

import { combineReducers } from 'redux';

import userReducer from './userReducer';
import anotherUserReducer from './another-User-Reducer';


const rootReducer = combineReducers({
  user: userReducer,
  anotherUser: anotherUserReducer

});

export default rootReducer;
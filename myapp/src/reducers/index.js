import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as formReducer } from 'redux-form';
import userlist from './userlist';
import user from './user';

export default combineReducers({
  router: routerReducer,
  // form: formReducer,
  userlist,
  user
});

import listReducer from './listReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
});

export default rootReducer;
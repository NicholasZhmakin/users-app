import {
  FETCHING_USERS_REQUEST,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE
} from '../actions/types';

const initState = {
  isFetching: false,
  errorMessage: '',
  users:[]
};

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_USERS_REQUEST:
      return {...state, isFetching: true};
    case FETCHING_USERS_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCHING_USERS_SUCCESS:
      return {...state, isFetching: false, users: action.payload};
    default: 
      return state;
  }
}

export default listReducer;
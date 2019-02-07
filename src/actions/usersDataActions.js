import {
  FETCHING_USERS_REQUEST,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAILURE
} from './types.js';

export const fetchingUsersRequest = () => ({type: FETCHING_USERS_REQUEST});

export const fetchingUsersSuccess = (json) => ({
  type: FETCHING_USERS_SUCCESS,
  payload: json
});

export const fetchingUsersFailure = (error) => ({
  type: FETCHING_USERS_FAILURE,
  payload: error
});

export const fetchUsers = () => {
  return async dispatch => {
    dispatch(fetchingUsersRequest());
    try {
      let response = await fetch('../clients.json');
      let json = await response.json();
      dispatch(fetchingUsersSuccess(json)); 
    } catch (error) {
      dispatch(fetchingUsersFailure(error));
    }
  }
};
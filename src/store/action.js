import { COMMON } from "./constant";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const fetchusersRequest = () => {
  return {
    type: COMMON.FETCH_USERS_REQUEST,
  };
};

export const fetchusersSuccess = (users) => {
  return {
    type: COMMON.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchusersFailure = (error) => {
  return {
    type: COMMON.FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = (state) => {
  return (dispatch) => {
    dispatch(fetchusersRequest(state));
    axios

      .get(`https://jsonplaceholder.typicode.com/posts/${state}`)
      .then((response) => {
        const users = response.data;

        dispatch(fetchusersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchusersFailure(errorMsg));
      });
  };
};

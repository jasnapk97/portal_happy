import { COMMON } from "./constant";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMON.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMON.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case COMMON.FETCH_USERS_FAILURE:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;

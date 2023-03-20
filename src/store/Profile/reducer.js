import { LOAD_AUTHOR_DATA, SAVE_AUTHOR_DATA } from "../profile/action.js";

const initialState = {
  authorData: null,
  loading: false,
  error: null,
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTHOR_DATA:
      return {
        ...state,
        authorData: action.payload,
        loading: false,
        error: null,
      };
    case SAVE_AUTHOR_DATA:
      return {
        ...state,
        authorData: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authorReducer;

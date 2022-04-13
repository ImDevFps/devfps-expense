import { startActionTypes } from "./start.types";

const INITIAL_STATE = {
  started: false,
  user: null,
};

const startReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case startActionTypes.INITIATE_APP:
      return {
        ...state,
        started: true,
      };
    case startActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default startReducer;

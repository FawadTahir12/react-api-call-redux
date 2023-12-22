// userReducer.js
import { SET_ANOTHER_USER } from "../../constant";

const initialState = {
  user: null,
};

const anotherUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANOTHER_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default anotherUserReducer;
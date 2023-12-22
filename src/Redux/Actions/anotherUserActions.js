import { SET_ANOTHER_USER } from "../../constant";
export const setAnotherUser = (userData) => ({
    type: SET_ANOTHER_USER,
    payload: userData,
  });
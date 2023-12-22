import { SET_USER } from "../../constant";
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});
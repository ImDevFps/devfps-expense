import { startActionTypes } from "./start.types";

export const initiateApp = () => ({
  type: startActionTypes.INITIATE_APP,
});

export const setUser = (user) => ({
  type: startActionTypes.SET_USER,
  payload: user,
});

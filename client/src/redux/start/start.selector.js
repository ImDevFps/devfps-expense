import { createSelector } from "reselect";

const selectStart = (state) => state.start;

export const isFirstTimeRun = createSelector(
  [selectStart],
  (firstTime) => firstTime.started
);

export const selectUser = createSelector([selectStart], (login) => login.user);

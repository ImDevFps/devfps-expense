import { createSelector } from "reselect";
const goalsSelector = (state) => state.goals;

export const selectGoals = createSelector([goalsSelector], (items) => items.goals);

import { createSelector } from "reselect";

const RecomendedItemsSelector = (state) => state.recomendeditems;

export const getRecomendedItems = createSelector(
  [RecomendedItemsSelector],
  (state) => state.list
);

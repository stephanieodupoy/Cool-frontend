import { createSelector } from "reselect";

const RecomendedcartsSelector = (state) => state.carts;

export const getRecomendedCarts = createSelector(
  [RecomendedcartsSelector],
  (state) => state.list
);

export const getSubtotal = createSelector(
  [RecomendedcartsSelector],
  (state) => state.subtotal
);

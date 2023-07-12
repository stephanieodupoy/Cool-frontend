import { createSelector } from "reselect";

const WishListcartsSelector = (state) => state.wishlistcarts;

export const getWishListCarts = createSelector(
  [WishListcartsSelector],
  (state) => state.list
);

export const getSubtotal = createSelector(
  [WishListcartsSelector],
  (state) => state.subtotal
);

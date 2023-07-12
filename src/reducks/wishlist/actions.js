export const FETCH_WISHLISTCART = "FETCH_WISHLISTCART";
export const fetchWishListCartItemsAction = (wishlistcarts, subtotal) => {
  return {
    type: "FETCH_CART",
    list: wishlistcarts,
    subtotal: subtotal,
  };
};

export const ADD_WISHLISTCART = "ADD_WISHLISTCART";
export const addWishListCartAction = (wishlistcarts, subtotal) => {
  return {
    type: "ADD_WISHLISTCART",
    list: wishlistcarts,
    subtotal: subtotal,
  };
};

export const INCREASE_WISHLISTCART = "INCREASE_WISHLISTART";
export const increaseWishListCartAction = (wishlistcarts, subtotal) => {
  return {
    type: "INCREASE_WISHLISTCART",
    list: wishlistcarts,
    subtotal: subtotal,
  };
};

export const DECREASE_WISHLISTCART = "DECREASE_WISHLISTCART";
export const decreaseWishListCartAction = (wishlistcarts, subtotal) => {
  return {
    type: "DECREASE_WISHLISTCART",
    list: wishlistcarts,
    subtotal: subtotal,
  };
};

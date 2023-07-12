export const FETCH_RECOMENDEDCART = "FETCH_RECOMENDEDCART";
export const fetchRecomendedCartItemsAction = (recomendedcarts, subtotal) => {
  return {
    type: "FETCH_RECOMENDEDCART",
    list: recomendedcarts,
    subtotal: subtotal,
  };
};

export const ADD_RECOMENDEDCART = "ADD_RECOMENDEDCART";
export const addRecomendedCartAction = (recomendedcarts, subtotal) => {
  return {
    type: "ADD_RECOMENDEDCART",
    list: recomendedcarts,
    subtotal: subtotal,
  };
};

export const INCREASE_RECOMENDEDCART = "INCREASE_RECOMENDEDCART";
export const increaseRecomendedCartAction = (recomendedcarts, subtotal) => {
  return {
    type: "INCREASE_RECOMENDEDCART",
    list: recomendedcarts,
    subtotal: subtotal,
  };
};

export const DECREASE_RECOMENDEDCART = "DECREASE_RECOMENDEDCART";
export const decreaseRecomendedCartAction = (recomendedcarts, subtotal) => {
  return {
    type: "DECREASE_RECOMENDEDCART",
    list: recomendedcarts,
    subtotal: subtotal,
  };
};

import * as Actions from "./actions";
import initialState from "../store/initialState";

export const WishListReducer = (state = initialState.wishlistcarts, action) => {
  switch (action.type) {
    case Actions.FETCH_WISHLISTCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.ADD_WISHLISTCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.INCREASE_WISHLISTCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.DECREASE_WISHLISTCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    default:
      return state;
  }
};

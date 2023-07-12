import * as Actions from "./actions";
import initialState from "../store/initialState";

export const RecomendedCartsReducer = (
  state = initialState.recomendedcarts,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_RECOMENDEDCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.ADD_RECOMENDEDCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.INCREASE_RECOMENDEDCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.DECREASE_RECOMENDEDCART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    default:
      return state;
  }
};

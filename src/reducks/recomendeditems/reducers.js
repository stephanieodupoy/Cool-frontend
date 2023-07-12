import * as Actions from "./actions";
import initialState from "../store/initialState";

export const RecomendedItemsReducer = (
  state = initialState.recomendeditems,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_RECOMENDEDITEM:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

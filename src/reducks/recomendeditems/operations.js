import API from "../../API";
import { fetchRecomendedItemsAction } from "./actions";

const api = new API();

export const fetchRecomendedItems = () => {
  return async (dispatch) => {
    return api
      .getRecomendedItems()
      .then((recomendeditems) => {
        dispatch(fetchRecomendedItemsAction(recomendeditems));
      })
      .catch((error) => {
        alert("Failed to connect API: /items/");
      });
  };
};

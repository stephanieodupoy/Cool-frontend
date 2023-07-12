export const FETCH_RECOMENDEDITEM = "FETCH_RECOMENDEDITEM";
export const fetchRecomendedItemsAction = (recomendeditems) => {
  return {
    type: "FETCH_RECOMENDEDITEM",
    payload: recomendeditems,
  };
};

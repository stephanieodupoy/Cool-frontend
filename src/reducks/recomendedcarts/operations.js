import API from "../../API";
import {
  addRecomendedCartAction,
  fetchRecomendedCartItemsAction,
  increaseRecomendedCartAction,
  decreaseRecomendedCartAction,
} from "./actions";
// import { push } from "connected-react-router";

const api = new API();
// const CARTS_KEY = "CARTS_KEY";

export const fetchRecomendedCarts = () => {
  return async (dispatch) => {
    return api
      .getRecomendedCarts()
      .then((recomendedcarts) => {
        const subtotal = calculateSubtotal(recomendedcarts);
        dispatch(fetchRecomendedCartItemsAction(recomendedcarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API: /recomendedcarts/");
      });
  };
};

export const addRecomendedCart = (recomendeditem) => {
  return async (dispatch, getState) => {
    return api
      .addRecomendedCarts(recomendeditem.id)
      .then((addedRecomendedCart) => {
        let prevRecomendedCarts = getState().recomendedcarts.list;
        addedRecomendedCart["recomendeditem"] = recomendeditem;
        prevRecomendedCarts.push(addedRecomendedCart);
        const subtotal = calculateSubtotal(prevRecomendedCarts);
        dispatch(addRecomendedCartAction(prevRecomendedCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to add recomendedcart");
        console.log(error);
      });
  };
};

export const increaseRecomendedCart = (recomendedcart_id) => {
  return async (dispatch, getState) => {
    let prevRecomendedCarts = getState().recomendedcarts.list;
    let matchedRecomendedCarts = prevRecomendedCarts.filter(
      (recomendedcart) => recomendedcart.id === recomendedcart_id
    );
    let nextSelectedCount = matchedRecomendedCarts[0].quantity + 1;
    return api
      .updateRecomendedCarts(recomendedcart_id, nextSelectedCount)
      .then((updatedRecomendedCart) => {
        prevRecomendedCarts = prevRecomendedCarts.filter(
          (recomendedcart) => recomendedcart.id !== recomendedcart_id
        );
        prevRecomendedCarts.push(updatedRecomendedCart);
        const subtotal = calculateSubtotal(prevRecomendedCarts);
        dispatch(increaseRecomendedCartAction(prevRecomendedCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to increase cart's quantity");
        console.log(error);
      });
  };
};

export const decreaseRecomendedCart = (recomendedcart_id) => {
  return async (dispatch, getState) => {
    let prevRecomendedCarts = getState().recomendedcarts.list;
    let matchedRecomendedCarts = prevRecomendedCarts.filter(
      (recomendedcart) => recomendedcart.id === recomendedcart_id
    );
    let nextSelectedCount = matchedRecomendedCarts[0].quantity - 1;
    if (nextSelectedCount > 0) {
      // if quantity is more than 0, update
      return api
        .updateRecomendedCarts(recomendedcart_id, nextSelectedCount)
        .then((updatedRecomendedCart) => {
          prevRecomendedCarts = prevRecomendedCarts.filter(
            (recomendedcart) => recomendedcart.id !== recomendedcart_id
          );
          prevRecomendedCarts.push(updatedRecomendedCart);
          const subtotal = calculateSubtotal(prevRecomendedCarts);
          dispatch(decreaseRecomendedCartAction(prevRecomendedCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    } else {
      // if quantity is 0, delete
      return api
        .deleteRecomendedCarts(recomendedcart_id)
        .then((deletedRecomendedCarts) => {
          prevRecomendedCarts = prevRecomendedCarts.filter(
            (recomendedcart) => recomendedcart.id !== recomendedcart_id
          );
          const subtotal = calculateSubtotal(prevRecomendedCarts);
          dispatch(decreaseRecomendedCartAction(prevRecomendedCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    }
  };
};

const calculateSubtotal = (recomendedcarts) => {
  let subtotal = 0;
  for (let key in recomendedcarts) {
    subtotal +=
      Number(recomendedcarts[key].recomendeditem.price) *
      recomendedcarts[key].quantity;
  }
  return subtotal;
};

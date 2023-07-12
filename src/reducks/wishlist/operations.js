import API from "../../API";
import {
  addWishListCartAction,
  fetchWishListCartItemsAction,
  increaseWishListCartAction,
  decreaseWishListCartAction,
} from "./actions";
import { push } from "connected-react-router";

const api = new API();
const CARTS_KEY = "CARTS_KEY";

export const fetchWishListCarts = () => {
  return async (dispatch) => {
    return api
      .getWishListCarts()
      .then((wishlistcarts) => {
        const subtotal = calculateSubtotal(wishlistcarts);
        dispatch(fetchWishListCartItemsAction(carts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
};

export const addWishListCart = (favouriteitem) => {
  return async (dispatch, getState) => {
    return api
      .addCarts(favouriteitem.id)
      .then((addedWishListCart) => {
        let prevWishListCarts = getState().WishListcarts.list;
        addedWishListCart["favouriteitem"] = favouriteitem;
        prevWishListCarts.push(addedWishListCart);
        const subtotal = calculateSubtotal(prevWishListCarts);
        dispatch(addWishListCartAction(prevWishListCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to add cart");
        console.log(error);
      });
  };
};

export const increaseWishListCart = (wishlistcart_id) => {
  return async (dispatch, getState) => {
    let prevWishListCarts = getState().WishListcarts.list;
    let matchedWishListCarts = prevWishListCarts.filter(
      (wishlistcart) => wishlistcart.id === wishlistcart_id
    );
    let nextSelectedCount = matchedWishListCarts[0].quantity + 1;
    return api
      .updateCarts(wishlistcart_id, nextSelectedCount)
      .then((updatedWishListCart) => {
        prevWishListCarts = prevWishListCarts.filter(
          (wishlistcart) => wishlistcart.id !== wishlistcart_id
        );
        prevWishListCarts.push(updatedWishListCart);
        const subtotal = calculateSubtotal(prevWishListCarts);
        dispatch(increaseWishListCartAction(prevWishListCarts, subtotal));
      })
      .catch((error) => {
        alert("Failed to connect API to increase cart's quantity");
        console.log(error);
      });
  };
};

export const decreaseWishListCart = (wishlistcart_id) => {
  return async (dispatch, getState) => {
    let prevWishListCarts = getState().wishlistcarts.list;
    let matchedWishListCarts = prevWishListCarts.filter(
      (wishlistcart) => wishlistcart.id === wishlistcart_id
    );
    let nextSelectedCount = matchedWishListCarts[0].quantity - 1;
    if (nextSelectedCount > 0) {
      // if quantity is more than 0, update
      return api
        .updateCarts(wishlistcart_id, nextSelectedCount)
        .then((updatedWishListCart) => {
          prevWishListCarts = prevWishListCarts.filter(
            (wishlistcart) => wishlistcart.id !== wishlistcart_id
          );
          prevWishListCarts.push(updatedWishListCart);
          const subtotal = calculateSubtotal(prevWishListCarts);
          dispatch(decreaseWishListCartAction(prevWishListCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    } else {
      // if quantity is 0, delete
      return api
        .deleteWishListCarts(wishlistcart_id)
        .then((deletedWishListCarts) => {
          prevWishListCarts = prevWishListCarts.filter(
            (wishlistcart) => wishlistcart.id !== wishlistcart_id
          );
          const subtotal = calculateSubtotal(prevWishListCarts);
          dispatch(decreaseWishListCartAction(prevWishListCarts, subtotal));
        })
        .catch((error) => {
          alert("Failed to connect API to decrease cart's quantity");
          console.log(error);
        });
    }
  };
};

const calculateSubtotal = (wishlistcarts) => {
  let subtotal = 0;
  for (let key in wishlistcarts) {
    subtotal +=
      Number(wishlistcarts[key].item.price) * wishlistcarts[key].quantity;
  }
  return subtotal;
};

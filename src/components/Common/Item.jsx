import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import deleteicon from "../../assets/img/delete.png";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";
import { push } from "connected-react-router";
import like from "../../assets/img/like.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { deleteFavourite } from "../../reducks/favourites/operations";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

const Item = ({ item }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [showLikeButton, setShowLikeButton] = useState(true);
  const favourites = getFavourites(selector);

  // const [showLikeButton, setShowLikeButton] = useState(true);
  // const favourites = getFavourites(selector);

  // const clickFavourite = (item) => {
  //   dispatch(addFavourite(item));
  // };

  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      console.log("carts");
      console.log(carts);
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      console.log("matchedCarts");
      console.log(matchedCarts);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);
  useEffect(() => {
    let favoriteitem = favourites.filter(
      (favourite) => favourite.id == item.id
    );
    if (favoriteitem.length > 0) {
      setShowLikeButton(false);
    }
    else {
      setShowLikeButton(true);

    }
  }, [favourites]);
  const clickFavourite = (item) => {
    dispatch(addFavourite(item));
  };

  const clickAddCart = () => {
    if (key) {
      dispatch(addCart(item));
    } else {
      dispatch(push("/signin"));
    }
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
  };
  return (
    <div>
      <div class="page-wrapper">
        <div class="post-slider">
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
          <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /> */}

          <div class="post-wrapper">
            <div class="post">
              <img src={item.image} class="slider-image" />
              {showLikeButton && (
                <img
                  class="like"
                  src={like}
                  onClick={() => {
                    clickFavourite(item);
                  }}
                />
              )}
              <img
                class="delete"
                src={deleteicon}
                onClick={() => {
                  dispatch(deleteFavourite(item.id));
                }}
              />
              <div class="post-info">
                <h2>
                  {item.name}
                  <br />
                  {item.price}
                </h2>

                {particularCart && particularCart.quantity > 0 ? (
                  <div class="number">
                    <span class="minus" onClick={clickMinusCart}>
                      -
                    </span>
                    <span class="count">{particularCart.quantity}</span>
                    <span class="plus" onClick={clickPlusCart}>
                      +
                    </span>
                  </div>
                ) : (
                  <button onClick={clickAddCart}>Add To Cart</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

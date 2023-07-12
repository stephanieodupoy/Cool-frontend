import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

const CartItem = ({ cart, quantity, cartId }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cartId));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cartId));
  };

  useEffect(() => {
    console.log(cart.image);
    console.log(cart);
    console.log(carts);
  }, []);

  return (
    <>
      <seciton class="detailss">
        <div class="product-detailss">
          <div class="box2">
            <table>
              <thead>
                <th class="th-heading">Product</th>
                {/* <th class="th-heading2">Size</th> */}
                <th class="th-heading3">Ammount</th>
                <th class="th-heading4">Price</th>
              </thead>
              <tr>
                <td class="td-item">
                  <div class="ring">
                    <img
                      class="product"
                      src={
                        "https://res.cloudinary.com/www-techis-io/" + cart.image
                      }
                    />
                  </div>
                </td>
                <td>{cart.name}</td>
                {/* <td class="td-category">{cart.price}</td> */}
                <td class="td-quantity">
                  <div class="cartbtn">
                    <span class="minus" onClick={clickMinusCart}>
                      -
                    </span>
                    <span class="count">{quantity}</span>
                    <span class="plus" onClick={clickPlusCart}>
                      +
                    </span>
                  </div>
                </td>
                {/* <td class="td-price">{carts.size}</td> */}
                <td class="td-price">${cart.price}</td>
              </tr>
            </table>
          </div>
        </div>
      </seciton>
    </>
  );
};

export default CartItem;

// import React, { useEffect, useState } from "react";
// import CartItem from "../components/Common/CartItem";
// import { fetchCarts } from "../reducks/carts/operations";
// import { fetchRecomendedCarts } from "../reducks/recomendedcarts/operations";
// import { fetchItems } from "../reducks/items/operations";
// import { fetchRecomendedItems } from "../reducks/recomendeditems/operations";
// import { getCarts } from "../reducks/carts/selectors";
// import { getRecomendedCarts } from "../reducks/recomendedcarts/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../reducks/users/selectors";
// import { getItems } from "../reducks/items/selectors";
// import { getRecomendedItems } from "../reducks/recomendeditems/selectors";
// import { getSubtotal } from "../reducks/carts/selectors";
// import RecomendedCarts from "../components/Common/RecomendedCarts";
// import { push } from "connected-react-router";

// const Cart = () => {
//   const selector = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const carts = getCarts(selector);
//   const recomendedcarts = getRecomendedCarts(selector);

//   const user = getUser(selector);
//   const items = getItems(selector);
//   const recomendeditems = getRecomendedItems(selector);

//   const subtotal = getSubtotal(selector);

//   const continuebtn = () => {
//     dispatch(push("/"));
//   };
//   const nextbtn = () => {
//     dispatch(push("/Shipping"));
//   };
//   useEffect(() => {
//     dispatch(fetchItems());

//     dispatch(fetchCarts());
//     dispatch(fetchRecomendedItems());

//     dispatch(fetchRecomendedCarts());
//   }, []);

//   return (
//     <>
//       {
//         (carts,
//         items &&
//           carts.map((cart) => (
//             <CartItem
//               cart={cart.item}
//               cartId={cart.id}
//               key={cart.item.id}
//               quantity={cart.quantity}
//             />
//           )))
//       }
//       {/* {
//         (recomendedcarts,
//         recomendeditems &&
//           recomendedcarts.map((recomendedcart) => (
//             <RecomendedCarts
//               recomendedcart={recomendedcart.recomendeditem}
//               recomendedcartId={recomendedcart.id}
//               key={recomendedcart.recomendeditem.id}
//               quantity={recomendedcart.quantity}
//             />
//           )))
//       } */}
//       <div className="cartfooter">
//         <h4>
//           Total Cost: <span>${subtotal}</span>{" "}
//         </h4>

//         <button class="cartbutton" onClick={continuebtn}>
//           Continue Shopping
//         </button>

//         <button class="nextstep" onClick={nextbtn}>
//           Next Step
//         </button>
//       </div>
//     </>
//   );
// };

// export default Cart;

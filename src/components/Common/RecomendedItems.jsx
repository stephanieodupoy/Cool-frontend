// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addRecomendedCart,
//   increaseRecomendedCart,
//   decreaseRecomendedCart,
// } from "../../reducks/recomendedcarts/operations";

// import {
//   getRecomendedCarts,
//   getSubtotal,
// } from "../../reducks/recomendedcarts/selectors";
// import { getRecomendedItems } from "../../reducks/recomendeditems/selectors";
// import { push } from "connected-react-router";
// import like from "../../assets/img/like.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   solid,
// //   regular,
// //   brands,
// // } from "@fortawesome/fontawesome-svg-core/import.macro";
// const RecomendedItem = ({ recomendeditem }) => {
//   const selector = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const recomendedcarts = getRecomendedCarts(selector);
//   const subtotal = getSubtotal(selector);
//   const recomendeditems = getRecomendedItems(selector);
//   const [particularRecomendedCart, setParticularRecomendedCart] = useState();
//   //   const key = localStorage.getRecomendedItems("LOGIN_USER_KEY");

//   useEffect(() => {
//     if (recomendedcarts.length > 0) {
//       console.log("recomendedcarts");
//       console.log(recomendedcarts);
//       let matchedRecomendedCarts = recomendedcarts.filter(
//         (recomendedcart) =>
//           recomendedcart.recomendeditem.id == recomendeditem.id
//       );
//       console.log("matchedCarts");
//       console.log(matchedRecomendedCarts);
//       if (matchedRecomendedCarts.length > 0) {
//         setParticularRecomendedCart(matchedRecomendedCarts[0]);
//       } else {
//         setParticularRecomendedCart();
//       }
//     }
//   }, [subtotal]);

//   const clickRecomendedAddCart = () => {
//     console.log("recomendeditems", recomendeditems);
//     dispatch(addRecomendedCart(recomendeditems));
//   };
//   const clickPlusRecomendedCart = () => {
//     dispatch(increaseRecomendedCart(particularRecomendedCart.id));
//   };
//   const clickMinusRecomendedCart = () => {
//     dispatch(decreaseRecomendedCart(particularRecomendedCart.id));
//   };
//   return (
//     <div>
//       <div class="page-wrapper">
//         <div class="post-slider">
//           {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
//           <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /> */}

//           <div class="post-wrapper">
//             <div class="post">
//               <img src={recomendeditem.recomendedimage} class="slider-image" />
//               <img class="like" src={like} />
//               <div class="post-info">
//                 <h2>
//                   {recomendeditem.recomendedname}
//                   <br />
//                   {recomendeditem.recomendedprice}
//                 </h2>

//                 {particularRecomendedCart &&
//                 particularRecomendedCart.quantity > 0 ? (
//                   <div class="number">
//                     <span class="minus" onClick={clickMinusRecomendedCart}>
//                       -
//                     </span>
//                     <span class="count">
//                       {particularRecomendedCart.quantity}
//                     </span>
//                     <span class="plus" onClick={clickPlusRecomendedCart}>
//                       +
//                     </span>
//                   </div>
//                 ) : (
//                   <button onClick={clickRecomendedAddCart}>Add To Cart</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecomendedItem;

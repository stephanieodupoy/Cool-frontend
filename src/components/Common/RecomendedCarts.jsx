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

// const RecomendedCarts = ({ recomendedcart, quantity, RecomendedcartId }) => {
//   const selector = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const recomendedcarts = getRecomendedCarts(selector);
//   const subtotal = getSubtotal(selector);

//   const clickPlusCart = () => {
//     dispatch(increaseRecomendedCart(RecomendedcartId));
//   };
//   const clickMinusCart = () => {
//     dispatch(decreaseRecomendedCart(RecomendedcartId));
//   };

//   useEffect(() => {
//     console.log(recomendedcart.image);
//     console.log(recomendedcart);
//     console.log(recomendedcarts);
//   }, []);

//   return (
//     <>
//       <seciton class="detailss">
//         <div class="product-detailss">
//           <div class="box2">
//             <table>
//               <thead>
//                 <th class="th-heading">Product</th>
//                 <th class="th-heading2">Size</th>
//                 <th class="th-heading3">Ammount</th>
//                 <th class="th-heading4">Price</th>
//               </thead>
//               <tr>
//                 <td class="td-item">
//                   <div class="ring">
//                     <img
//                       class="product"
//                       src={
//                         "https://res.cloudinary.com/www-techis-io/" +
//                         recomendedcart.image
//                       }
//                     />
//                   </div>
//                 </td>
//                 <td>{recomendedcart.recomendedname}</td>
//                 {/* <td class="td-category">{cart.price}</td> */}
//                 <td class="td-quantity">
//                   <div class="cartbtn">
//                     <span class="minus" onClick={clickMinusCart}>
//                       -
//                     </span>
//                     <span class="count">{quantity}</span>
//                     <span class="plus" onClick={clickPlusCart}>
//                       +
//                     </span>
//                   </div>
//                 </td>
//                 {/* <td class="td-price">{carts.size}</td> */}
//                 <td class="td-price">${recomendedcart.recomendedprice}</td>
//               </tr>
//             </table>
//           </div>
//         </div>
//       </seciton>
//     </>
//   );
// };

// export default RecomendedCarts;

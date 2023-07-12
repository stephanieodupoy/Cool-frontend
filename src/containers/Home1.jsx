// import React, { useEffect } from "react";
// import { getRecomendedItems } from "../reducks/recomendeditems/selectors";
// import { fetchRecomendedItems } from "../reducks/recomendeditems/operations";
// import { fetchRecomendedCarts } from "../reducks/recomendedcarts/operations";
// import { useDispatch, useSelector } from "react-redux";
// import RecomendedItem from "../components/Common/RecomendedItems";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Home1 = () => {
//   const selector = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const recomendeditems = getRecomendedItems(selector);
//   //   const key = localStorage.setRecomendedItem("LOGIN_USER_KEY");
//   // const keys = localStorage.getRecomendedItem("LOGIN_USER_KEY");

//   useEffect(() => {
//     dispatch(fetchRecomendedItems());
//     {
//       dispatch(fetchRecomendedCarts());
//       console.log(recomendeditems);
//     }
//   }, []);
//   console.log(recomendeditems);
//   //   useEffect(() => {
//   //     dispatch(fetchItems());
//   //     if (localStorage.getItem("LOGIN_USER_KEY")) {
//   //       dispatch(fetchCarts());
//   //       console.log(items);
//   //     }
//   //   }, []);
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,

//     slidesToShow: 4,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         {recomendeditems &&
//           recomendeditems.map((recomendeditem) => (
//             <RecomendedItem
//               //   key={recomendeditem.id}
//               recomendeditem={recomendeditem}
//             />
//           ))}
//       </Slider>
//     </>
//   );
// };

// export default Home1;

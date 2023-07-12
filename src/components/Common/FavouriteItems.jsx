// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavourites } from "../../reducks/favourites/selectors";
// import { fetchFromLocalStorage } from "../../reducks/favourites/operations";
// import Items from "../Common/Item";
// // import Footer from "../components/common/Footer";
// // import Header from "../components/common/Header";
// import rightarrow from "../../assets/img/next.png";
// import leftarrow from "../../assets/img/left-arrow.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const Favourites = (items) => {
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state);
//   const favourites = getFavourites(selector);
//   console.log(favourites);
//   useEffect(() => {
//     dispatch(fetchFromLocalStorage());
//   }, []);
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={"slick-arrow"}
//         style={{ ...style, display: "block" }}
//         onClick={onClick}
//       >
//         <img src={rightarrow} class="nextss" alt="" />
//       </div>
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={"slick-arrow"}
//         style={{
//           ...style,
//           display: "block",
//           // background: "black",
//         }}
//         onClick={onClick}
//       >
//         <img src={leftarrow} class="prevss" alt="" />
//       </div>
//     );
//   }

//   console.log("Items", items);
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,

//     slidesToShow: 4,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: false,
//           dots: false,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       {/* <Header /> */}
//       <Slider {...settings}>
//         {favourites &&
//           favourites.map((favourite) => <Items item={favourite} />)}
//       </Slider>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Favourites;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getFavourites } from "../../reducks/favourites/selectors";
// import { fetchFromLocalStorage } from "../../reducks/favourites/operations";
// import Items from "../Common/Item";
// // import Footer from "../components/common/Footer";
// // import Header from "../components/common/Header";

// const DeleteFavourites = (items) => {
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state);
//   const favourites = getFavourites(selector);
//   console.log(favourites);
//   useEffect(() => {
//     dispatch(fetchFromLocalStorage());
//   }, []);
//   return (
//     <>
//       {/* <Header /> */}
//       {favourites && favourites.map((favourite) => <Items item={favourite} />)}

//       {/* <Footer /> */}
//     </>
//   );
// };

// export default DeleteFavourites;

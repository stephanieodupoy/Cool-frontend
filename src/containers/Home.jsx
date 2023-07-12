import React, { useEffect, useState } from "react";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import RecomendedItem from "../components/Common/SelectedItems";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/Common/MainImage";
import { fetchCarts } from "../reducks/carts/operations";
import rightarrow from "../assets/img/right-arrow.png";
import leftarrow from "../assets/img/left-arrow.png";
import Favourites from "../components/Common/FavouriteItems";
import { addFavourite } from "../reducks/favourites/operations";
import { getFavourites } from "../reducks/favourites/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import Favorites from "../components/Common/FavouriteItems";
// import RecomendedItem from "../components/Common/RecomendedItem";
import Header from "../components/Common/Header";
import Home1 from "../containers/Home1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import API from "../API";







const api = new API();
const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);
  // const favouritesItems = getFavourites(selector);
  const [favouriteItems, setfavouriteItems] = useState(null);
  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
      console.log(items);
    }
  }, []);
  // useEffect(() => {
  //   api
  //     .getItems({ require_token: true })
  //     .then((items) => {
  //       setfavouriteItems(items);
  //     })
  //     .catch((error) => {
  //       alert("Failed to connect API: /movies/");
  //     });
  // }, []);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slick-arrow"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={rightarrow} class="next" alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slick-arrow"}
        style={{
          ...style,
          display: "block",
          // background: "black",
        }}
        onClick={onClick}
      >
        <img src={leftarrow} class="prevss" alt="" />
      </div>
    );
  }

  console.log("Items", items);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Header />

      <MainImage />
      <div class="page-wrapper">
        <h4>Selected just for you</h4>
      </div>
      <Slider {...settings}>
        {items && items.map((item) => <Item key={item.id} item={item} />)}
      </Slider>
      {/* <Home1 /> */}
      {/* {items &&
        items.map((item) => <RecomendedItem key={item.id} item={item} />)} */}
      {/* {favouriteItems.results.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))} */}
      

      <div class="page-wrapper">
        <h4>Favourites Tees</h4>
      </div>
      <Slider {...settings}>
        {favourites && favourites.map((favourite) => <Item item={favourite} />)}
      </Slider>
      {/* <Slider {...settings}> */}
      {/* {items && items.results.lenght > 0 ?(
        {favouriteItems.results.map(favourite => (
            <Favorite key={favourite.id} item={favourite} />
        )}:()} */}
      {/* {items && items > 0 ? (
          <>
            {favouriteItems.results.map((movie) => (
              <Favorite item={movie} />
            ))}
          </>
        ) : ( */}
      {/* <></>
        )} */}
      {/* </Slider> */}
      
      {/* <Slider {...settings}>
        {favourites && favourites.map((favourite) => <Item item={favourite} />)}
      </Slider> */}
    </div>
  );
};

export default Home;

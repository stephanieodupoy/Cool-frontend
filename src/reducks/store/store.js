import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { PostsReducer } from "../posts/reducers";
import { UserReducer } from "../users/reducers";
import { ItemsReducer } from "../items/reducers";
import { CartsReducer } from "../carts/reducers";
import { RecomendedItemsReducer } from "../recomendeditems/reducers";
import { RecomendedCartsReducer } from "../recomendedcarts/reducers";
// import { FavouriteItemsReducer } from "../favourite_items/reducers";
import { FavourotesReducer } from "../favourites/reducers";
// import { WishListReducer } from "../wishlist/reducers";
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      posts: PostsReducer,
      users: UserReducer,
      items: ItemsReducer,
      carts: CartsReducer,
      recomendedcarts: RecomendedCartsReducer,
      recomendeditems: RecomendedItemsReducer,
      favourites: FavourotesReducer,

      // wishlist: WishListReducer,
    }),
    compose(
      applyMiddleware(routerMiddleware(history), thunk)
      // DEBUG MODE
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

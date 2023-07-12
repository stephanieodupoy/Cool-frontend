import axios from "axios";
const LOGIN_USER_KEY = "LOGIN_USER_KEY";

// var baseURL;
// if (
//   process.env.REACT_APP_ENVIRONMENT &&
//   process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
// ) {
//   baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//   baseURL = "http://127.0.0.1:8000/";
// }
// var baseURL = "https://store-cooltees-backend.herokuapp.com/";
var baseURL = "https://cool-backend.stephanieodupoy.repl.co/";


const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  //////////////////////////////
  // USERS
  /////////////////////////////

  signUp = async (user_name, email, password) => {
    const savedPost = await api
      .post("/users/signup/", {
        user_name: user_name,
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  signIn = async (email, password) => {
    const savedPost = await api
      .post("/users/signin/", {
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  getUsers = async () => {
    const posts = await api
      .get("/users/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };

  // ///////////////////////////////////////
  // Items
  // ///////////////////////////////////////

  getItems = async () => {
    let url = "/items/";
    const items = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return items;
  };
  // ///////////////////////////////////////
  // Recomended Items
  // ///////////////////////////////////////

  getRecomendedItems = async () => {
    let url = "/recomendeditems/";
    const recomendeditems = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return recomendeditems;
  };

  // ///////////////////////////////////////
  // Favourite Items
  // ///////////////////////////////////////

  // getFavouriteItems = async () => {
  //   let url = "/favouriteitems/";
  //   const favouriteitems = await api
  //     .get(url)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  //   return favouriteitems;
  // };

  // ///////////////////////////////////////
  // Carts
  // //////////////////////////////////////

  getCarts = async () => {
    const carts = await api
      .get("/carts/", { requireToken: true })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return carts;
  };

  addCarts = async (item_id) => {
    const savedCart = await api
      .post("/carts/add/", {
        item: item_id,
        quantity: 1,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  updateCarts = async (cart_id, quantity) => {
    const savedCart = await api
      .put("/carts/update/" + cart_id + "/", {
        quantity: quantity,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  deleteCarts = async (cart_id) => {
    const response = await api
      .delete("/carts/delete/" + cart_id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  //////////////////////////////////////////
  // WishList CART
  //////////////////////////////////////////

  // getWishListCarts = async () => {
  //   const wishlistcarts = await api
  //     .get("/wishlistcarts/", { requireToken: true })
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  //   return wishlistcarts;
  // };

  // addWishListCarts = async (favouriteitem_id) => {
  //   const savedWishListCart = await api
  //     .post("/wishlistcarts/add/", {
  //       favouriteitem: favouriteitem_id,
  //       quantity: 1,
  //     })
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  //   return savedWishListCart;
  // };

  // updateWishListCarts = async (wishlistcart_id, quantity) => {
  //   const savedWishListCart = await api
  //     .put("/wishlistcarts/update/" + wishlistcart_id + "/", {
  //       quantity: quantity,
  //     })
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  //   return savedWishListCart;
  // };

  // deleteWishListCarts = async (wishlistcart_id) => {
  //   const response = await api
  //     .delete("/wishlistcarts/delete/" + wishlistcart_id + "/")
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  //   return response;
  // };

  //////////////////////////////////////////
  // Recomended CART
  //////////////////////////////////////////

  getRecomendedCarts = async () => {
    const recomendedcarts = await api
      .get("/recomendedcarts/", { requireToken: true })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return recomendedcarts;
  };

  addRecomendedCarts = async (recomendeditem_id) => {
    const savedRecomendedCart = await api
      .post(
        "/recomendedcarts/recomendedadd/",
        { requireToken: true },
        {
          recomendeditem: recomendeditem_id,
          quantity: 1,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedRecomendedCart;
  };

  updateRecomendedCarts = async (recomendedcart_id, quantity) => {
    const savedRecomendedCart = await api
      .put(
        "/recomdededcarts/recomended_update/" + recomendedcart_id + "/",
        { requireToken: true },
        {
          quantity: quantity,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedRecomendedCart;
  };

  deleteRecomendedCarts = async (recomendedcart_id) => {
    const response = await api
      .delete("/recomendedcarts/recomended_delete/" + recomendedcart_id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
  ////////////////////////////////////////////
  // Order/Checkout
  // ////////////////////////////////////////

  orderAdd = async (params = {}) => {
    const order = await api
      .post("/orders/add/", params)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return order;
  };

  ///////////////////////////////////////////
  // Reference Post
  //////////////////////////////////////////

  getPosts = async () => {
    const posts = await api
      .get("/posts/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };

  addPost = async (name, body, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("body", body);
    formData.append("image", image);
    const savedPost = await api
      .post("/posts/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };

  deletePost = async (id) => {
    const response = await api
      .delete("/posts/delete/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
}

const initialState = {
  posts: {
    list: [],
  },
  user: {
    user_name: "",
    email: "",
    token: "",
    token_expires_at: "",
  },
  items: {
    list: [],
  },
  // favouriteitems: {
  //   list: [],
  // },
  recomendeditems: {
    list: [],
  },
  favourites: {
    list: [],
  },
  carts: {
    list: [],
    subtotal: 0,
  },
  recomendedcarts: {
    list: [],
    subtotal: 0,
  },

  // wishlist: {
  //   list: [],
  //   subtotal: 0,
  // },
  order: {
    list: [],
    subtotal: 0,
  },
};

export default initialState;

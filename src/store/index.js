import { createStore } from "vuex";
import { items } from "../data/items";

export default createStore({
  state: {
    items: items,
    cart: {
      items: [],
      service: false,
      total: 0,
    },
  },
  getters: {
    totalPrice(state) {
      return state.cart.items.reduce(
        (prev, cur) => prev + cur.price * cur.quantity,
        0
      );
    },
    totalQuantity(state) {
      return state.cart.items.reduce((prev, cur) => prev + cur.quantity, 0);
    },
  },
  mutations: {
    createCart(state, item) {
      const { id, title, specs, price, article, img } = item;
      state.cart.items.push({
        id,
        title,
        specs,
        price,
        img,
        article,
        quantity: 1,
      });
    },
    decrement({ cart }, id) {
      cart.items.forEach((i) => {
        if (i.id === id) {
          i.quantity--;
        }
      });
    },
    increment({ cart }, id) {
      cart.items.forEach((i) => {
        if (i.id === id) {
          i.quantity++;
        }
      });
    },
    addService({ cart }, service) {
      cart.service = service;
    },
    removeItem({ cart }, id) {
      cart.items = cart.items.filter((i) => i.id !== id);
    },
    clearCart({ cart }) {
      cart.items = [];
      cart.total = 0;
    },
  },
});

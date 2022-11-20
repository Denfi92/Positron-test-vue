<template>
  <header class="header">
    <div class="header__container container">
      <CartHeader
        :quantity="$store.getters.totalQuantity"
        :total="$store.getters.totalPrice"
      />
    </div>
  </header>
  <main class="main">
    <TheCart :cart="$store.state.cart" />
  </main>
</template>

<script>
import TheCart from "./components/TheCart.vue";
import CartHeader from "./components/CartHeader.vue";

export default {
  name: "App",
  components: { TheCart, CartHeader },
  beforeMount() {
    const cartInit = this.$store.state.items.slice(0, 3);
    cartInit.forEach((i) => this.$store.commit("createCart", i));
  },
};
</script>

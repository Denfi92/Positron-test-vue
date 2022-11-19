<template>
  <header class="header">
    <div class="header__container container">
      <HeaderTotal />
    </div>
  </header>
  <main class="main">
    <TheCart />
  </main>
</template>

<script>
import TheCart from "./components/TheCart.vue";
import HeaderTotal from "./components/HeaderTotal.vue";

export default {
  name: "App",
  components: { TheCart, HeaderTotal },
};
</script>

<style lang="scss"></style>

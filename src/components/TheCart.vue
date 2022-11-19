<template>
  <div class="main__container container">
    <nav class="main__nav nav-main">
      <h5 class="nav-main__title">Главная</h5>
      <ul class="nav-main__list">
        <li class="nav-main__item">Корзина</li>
      </ul>
    </nav>
    <section class="cart">
      <div class="cart__header header-cart">
        <h1 class="header-cart__title">Ваша корзина</h1>
        <span class="header-cart__amount">4 товара</span>
        <button class="header-cart__btn">Очистить корзину</button>
      </div>
      <div class="cart__content content-cart">
        <CartList />
        <CartTotal />
      </div>
    </section>
    <section class="slider">
      <CartSlider />
    </section>
  </div>
</template>

<script>
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import CartSlider from "./CartSlider";

export default {
  components: { CartList, CartTotal, CartSlider },
};
</script>

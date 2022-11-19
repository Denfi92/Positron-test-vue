<template>
  <div class="content-cart__list cart-list">
    <CartItem />
    <div class="cart-list__service service-cart">
      <label class="service-cart__checkbox">
        <input class="checkbox" type="checkbox" />
      </label>
      <div class="service-cart__img"></div>
      <div class="service-cart__text service-text">
        <h5 class="service-text__title">Установка</h5>
        <p class="service-text__description">
          Отметьте, если Вам необходима консультация профессионала по монтажу
          выбранных товаров.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem },
};
</script>

<template>
  <div class="header__total total-header">
    <h5 class="total-header__title">Ваша корзина</h5>
    <p class="total-header__subtitle">{{ quantity }} товара</p>
    <p class="total-header__amount">{{ total }} ₽</p>
  </div>
</template>

<script>
export default {
  props: {
    quantity: Number,
    total: Number,
  },
};
</script>

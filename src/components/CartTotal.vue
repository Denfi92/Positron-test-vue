<template>
  <div class="content-cart__total cart-total">
    <h3 class="cart-total__title">Итого</h3>
    <div class="total-cart">
      <p class="total-cart__text">Сумма заказа</p>
      <span class="total-cart__value">{{ total }} ₽</span>
    </div>
    <div class="total-cart">
      <p class="total-cart__text">Количество</p>
      <span class="total-cart__value">{{ quantity }} шт</span>
    </div>
    <div class="total-cart total-cart--underline">
      <p class="total-cart__text">Установка</p>
      <span class="total-cart__value">{{ service ? "Да" : "Нет" }}</span>
    </div>
    <div class="total-cart">
      <p class="total-cart__text total-cart__text--bold">Стоимость товаров</p>
      <span class="total-cart__value total-cart__value--bold">
        {{ total }} ₽</span
      >
    </div>
    <form class="total-form" method="post" @submit.prevent="submitOrder">
      <button class="total-form__btn">Оформить заказ</button>
      <button class="total-form__btn total-form__btn--empty">
        Купить в 1 клик
      </button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["submitBtn"],
  props: {
    quantity: Number,
    total: Number,
    service: Boolean,
  },
  methods: {
    submitOrder() {
      this.$emit("submitBtn", {
        total: this.total,
        quantity: this.quantity,
        service: this.service,
      });
    },
  },
};
</script>

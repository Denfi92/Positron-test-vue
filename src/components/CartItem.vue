<template>
  <div class="cart-list__item cart-item">
    <div class="cart-item__img">
      <img :src="item.img" :alt="item.title" width="100" height="100" />
    </div>
    <div class="cart-item__text item-text">
      <h4 class="item-text__title">{{ item.title }}</h4>
      <p class="item-text__description">
        {{ item.specs }}
      </p>
      <p class="item-text__article">Артикул: {{ item.article }}</p>
    </div>
    <div class="cart-item__amount item-amount">
      <button
        class="item-amount__decrement item-counter"
        @click="onChange('decrement')"
        :disabled="item.quantity <= 1"
      ></button>
      <span class="item-amount__count item-counter">{{ item.quantity }}</span>
      <button
        class="item-amount__increment item-counter"
        @click="onChange('increment')"
      ></button>
      <span class="item-amount__price" v-show="item.quantity > 1"
        >{{ item.price }} ₽/шт.</span
      >
    </div>
    <div class="cart-item__price">{{ total }} ₽</div>
    <button class="cart-item__btn" @click="onChange('removeItem')"></button>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    total() {
      return this.item.price * this.item.quantity;
    },
  },
  methods: {
    onChange(action) {
      this.$store.commit(action, this.item.id);
    },
  },
};
</script>

<template>
  <div class="slider-card">
    <div class="slider-card__img">
      <img :src="item.img" :alt="item.title" />
    </div>
    <div class="slider-card__info card-info">
      <h4 class="card-info__title">{{ item.shortTitle }}</h4>
      <p class="card-info__description">{{ item.description }}</p>
    </div>
    <div class="slider-card__footer card-footer">
      <div class="card-footer__price card-price">
        <p class="card-price__ruble">
          {{ item.minPriceRub }} - {{ item.maxPriceRub }} ₽
        </p>
        <p class="card-price__euro">
          {{ item.minPriceEu }} - {{ item.maxPriceEu }} €
        </p>
      </div>
      <button class="slider-card__btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

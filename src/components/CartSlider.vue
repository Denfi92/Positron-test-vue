<template>
  <div class="slider__header slider-header">
    <h3 class="slider-header__title">Просмотренные товары</h3>
    <div class="slider-header__pagination pagination">
      <button
        class="pagination__btn pagination__btn--prev"
        @click="prev"
      ></button>
      <div class="pagination__counter">
        <span class="pagination__current">{{ current + 1 }}</span
        >/4
      </div>
      <button
        class="pagination__btn pagination__btn--next"
        @click="next"
      ></button>
    </div>
  </div>
  <Carousel
    v-model="current"
    :items-to-show="4"
    :itemsToScroll="1"
    :wrapAround="true"
    :snapAlign="'start'"
    ref="carousel"
  >
    <Slide v-for="item in this.$store.state.items" :key="item.id">
      <CartSliderItem :item="item" />
    </Slide>
  </Carousel>
</template>

<script>
import CartSliderItem from "./CartSliderItem";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
  components: { Carousel, Slide, CartSliderItem },
};
</script>

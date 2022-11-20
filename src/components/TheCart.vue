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
        <span class="header-cart__amount"
          >{{ $store.getters.totalQuantity }} товара</span
        >
        <button class="header-cart__btn" @click="clearCart">
          Очистить корзину
        </button>
      </div>
      <p v-if="!cart.items.length" class="cart__content--empty">
        {{
          submit
            ? `Ваш заказ: Сумма ${order.total}, 
        количество: ${order.quantity},
        Установка: ${order.service}`
            : "Корзина пуста"
        }}
      </p>
      <div class="cart__content content-cart" v-else>
        <CartList :items="cart.items" :service="cart.service" />
        <CartTotal
          :total="$store.getters.totalPrice"
          :quantity="$store.getters.totalQuantity"
          :service="cart.service"
          @submitBtn="initOrder"
        />
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
  props: {
    cart: Object,
  },
  data() {
    return {
      submit: false,
    };
  },
  components: { CartList, CartTotal, CartSlider },
  methods: {
    clearCart() {
      this.$store.commit("clearCart");
    },
    initOrder({ total, service, quantity }) {
      const order = {
        items: this.cart.items,
        quantity,
        total,
        service,
      };
      this.submit = true;
      setTimeout(() => {
        this.submit = false;
      }, 5000);
      console.log(order);
      this.order = order;
      this.clearCart();
    },
  },
};
</script>
